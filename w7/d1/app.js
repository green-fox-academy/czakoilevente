'use strict';

const express = require('express');
const path = require('path')
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080);



app.get(('/doubling'), (req, res) => {
  const inputNumber = Number(req.query.input);
  let myObject = {};

  if (req.query.input === undefined) {
    myObject.error = "Please provide an input!"
  } else {
    myObject.received = req.query.input;
    myObject.result = (inputNumber * 2).toString();
  };

  res.send(myObject);
});

app.get(('/greeter'), (req, res) => {
  let myObject = {};

  if (req.query.name === undefined) {
    myObject.error = "Please provide a name!";
  } else {
    myObject.welcome_message = `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`;
  };

  res.send(myObject);

})