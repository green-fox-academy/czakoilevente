'use strict';

require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const sql = require('mysql');

app.listen(PORT, () => {
  console.log(`Server is running, yay! Port ${PORT}`);
});

const connectQuiz = sql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
});

connectQuiz.connect((error) => {
  if (error) {
    console.log(error);
    console.error;
  } else {
    console.log('database up and running');
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static('assets'));

app.get('/', (req, res) => {
  console.log('/ get-method reqached the server, sending html to front...');
  res.sendFile(path.join(__dirname, 'assets/index.html'));
});

app.get('/game', (req, res) => {
  console.log('get request reached the server');

  connectQuiz.query(`SELECT question, answer, is_correct FROM answers LEFT JOIN questions ON questions.id = answers.question_id WHERE questions.id=1;`, (err, rows) => {
    if (err) {
      console.log('query failed');
      res.status(501).send();
    } else {
      console.log('query ok, sending rows to frontend');

      res.send(rows);
    }
  });
  //res.sendFile(path.join(__dirname, 'assets/index.html'));
});

app.get('/questions', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets/index2.html'));
});

function randomNumber(min, max) {
  return Math.floor(Math.random() * max) + min;
}

app.get('/api/game', (req, res) => {
  console.log('got the req on /api/get, sending rows back to front...');  
  connectQuiz.query(`SELECT question, answer, is_correct FROM answers LEFT JOIN questions ON questions.id = answers.question_id WHERE questions.id=${randomNumber(1, 10)};`, (err, rows) => {
    if (err) {
      res.status(502).send();
    } else {
      res.send(rows);
    }
  });
});

app.get('/api/questions', (req, res) => {
  connectQuiz.query('SELECT * FROM questions;', (err, rows) => {
    if (err){
      res.status(505).send();
    } else {
      res.send(rows);
    }
  })
;})