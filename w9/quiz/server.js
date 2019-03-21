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

  connectQuiz.query(`select question, answer, is_correct from answers left join questions on questions.id = answers.question_id where questions.id=${randomNumber(1,10)};`, (err, rows) => {
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

function howManyQuestions () {
  
}