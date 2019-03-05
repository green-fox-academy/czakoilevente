'use strict';

const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets/index.html'));
});

app.listen(8080);

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/doubling', (req, res) => {
  const inputNumber = Number(req.query.input);
  let myObject = {};

  if (req.query.input === undefined) {
    myObject.error = "Please provide an input!"
  } else {
    myObject.received = inputNumber;
    myObject.result = (inputNumber * 2);
  };

  res.send(JSON.stringify(myObject));
});

app.get('/greeter', (req, res) => {
  let myObject = {};

  if (req.query.name === undefined) {
    myObject.error = "Please provide a name!";
  } else {
    myObject.welcome_message = `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`;
  };

  res.send(JSON.stringify(myObject));
});

app.get('/appenda/:appendable?', (req, res) => {
  let myObject = {};

  if (req.params.appendable === undefined) {
    res.status(404).send('Error! Page not found');
  } else {
    myObject.appended = req.params.appendable + "a";
  };

  res.send(JSON.stringify(myObject));
});

