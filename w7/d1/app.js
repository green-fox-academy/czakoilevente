'use strict';

const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets/index.html'));
});

app.listen(8080);

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.json());

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

app.post('/dountil/:action', (req, res) => {
  //console.log(req.params, req.body);
  let myObject = {};

  if (req.body.until === undefined) {
    myObject.error = "Please provide a number!";
    res.send(JSON.stringify(myObject));
  };

  function sumFunction(numUntil) {
    let sumNum = 0;
    for (let i = 1; i <= numUntil; i++) {
      sumNum += i;
    };
    return sumNum;
  };

  if (req.params.action == "sum") {
    myObject.result = sumFunction(req.body.until);
    //console.log('Sum', myObject.result);
    res.send(JSON.stringify(myObject));
  };

  function factFunction(numUntil) {
    let sumNum = 1;
    for (let i = 1; i <= numUntil; i++) {
      sumNum *= i;
    };
    return sumNum;
  };

  if (req.params.action == "factor") {
    myObject.result = factFunction(req.body.until);
    //console.log('factor', myObject);
    res.send(JSON.stringify(myObject));
  };

});