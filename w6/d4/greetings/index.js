'use strict';

const express = require('express');
const app = express();
const PORT = 9000;

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Welcome back, Guest'
  });
});

app.get('/:name', (req, res) => {
  console.log(req.query);
  let data = req.query;
  res.send(`<h1>Welcome back, ${req.params.name}!</h1>`);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});