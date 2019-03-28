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

const connectMacro = sql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
});

connectMacro.connect((error) => {
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
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/attractions', (req, res) => {
  console.log(req.body);
  console.log(req.query);

  //FILTER SELECTION
  if (req.query.category && req.query.city) {
    //FILTER SELECTED
    connectMacro.query(`SELECT * FROM attractions WHERE category='${req.query.category}' OR city='${req.query.city}';`, (err, rows) => {
      if (err) {
        res.status(502).send();
      } else {
        res.send(rows);
      }
    });
  } else {
    //NO FILTER SELECTED
    connectMacro.query('SELECT * FROM attractions;', (err, rows) => {
      if (err) {
        res.status(501).send();
      } else {
        res.send(rows);
      }
    });
  }
});

app.post('/add', (req, res) => {
  console.log(req.body);
  if (req.body.id) {
    connectMacro.query(
      `UPDATE attractions SET attr_name='${req.body.attr_name}',city='${req.body.city}',category='${req.body.category}',price=${req.body.price},longitude=${req.body.longitude},lattitude=${req.body.lattitude},recommended_age=${req.body.recommended_age},duration=${req.body.duration} WHERE id=${req.body.id};`, (err, rows) => {
        if (err) {
          res.status(500).send();
        } else {
          res.send({ 'status': 'ok', 'id': req.body.id });
        }
      }
    )
  } else {
    connectMacro.query(`INSERT INTO attractions (attr_name,city,category,price,longitude,lattitude,recommended_age,duration) VALUES ('${req.body.attr_name}','${req.body.city}','${req.body.category}',${req.body.price},${req.body.lattitude},${req.body.longitude},${req.body.recommended_age},${req.body.duration});`, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send();
      } else {
        console.log(rows.insertId);

        //toggle prevent default event to check
        res.send({ 'status': 'ok', 'id': rows.insertId });
      }
    });
  }
});