'use strict';

const express = require('express');
const app = express();
const sql = require('mysql');
const path = require('path');
const PORT = 3030;


app.use(express.json());
app.use('/static', express.static('static'));

app.listen(PORT, () => {
  console.log(`Server is running, FuckYeah!  Port ${PORT}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
});

const reddit = sql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'reddit'
});

reddit.connect((error) => {
  if (error) {
    console.log('Connection to database fucked up! :) ');
  } else {
    console.log('Connection to database: FASZA!');
  };
});

app.get('/hello', (req, res) => {
  res.send('Hello her General!');
});

app.get('/posts', (req, res) => {
  reddit.query('SELECT * FROM posts;', (err, rows) => {
    res.json(rows);         //serve some static JSON to test out your API endpoint / make sure that it returns the same type of JSON object as specified
    res.status(200).send(); //send?
  });
});

app.post('/posts', (req, res) => {
  //let data = req.body;
  reddit.query(`insert into posts ( user_id, title, post_content ) values ( 'user_1', ${reddit.escape(req.body.title)}, ${reddit.escape(req.body.url)});`, (err, insInfo) => {
    reddit.query(`SELECT * FROM posts WHERE post_id = ${reddit.escape(insInfo.insertId)};`, (err, rows) => {
      res.json(rows);
    });
  });
});