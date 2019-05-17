'use strict';

//require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const sql = require('mysql');

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

const connect = sql.createConnection({
  //host: process.env.DB_HOST,
  user: 'rotor',
  password: 'rotor',
  database: 'hello-db'
});

function connectionReconnect () {
  setTimeout(() => {
    connect.connect((error) => {
      if (error) {
        console.log('database error' + '\n' + error);
        console.log('Trying to reconnect to database...');
        
        setTimeout(connectionReconnect, 5000)
      } else {
        console.log('database up and running');
      }
    });
  },25000);
};

connectionReconnect();

app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.use('/', express.static('./'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/'));
});

app.get('/list', (req, res) => {

    console.log('get req inc on /list');
    
  /* connect.query('SELECT * FROM users ORDER BY id DESC LIMIT 5;', (err, rows) => {
    if (err) {
      res.status(501).send();
    } else {
      res.send(rows);
    }
  }); */
});

app.post('/enter', (req,res) => {
    console.log('post req inc on /enter');
});