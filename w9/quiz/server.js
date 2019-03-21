'use strict';

require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const sql = require('mysql');

app.listen(PORT, () => {
  console.log(`Server is running, yay!  Port ${PORT}`);
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
app.use('/', express.static('.'));

app.get('/', (req, res) => {
  //res.send('workin');
  //res.sendFile(path.join(__dirname, 'index.html'));
});

