'use strict';

const express = require('express');
const app = express();
const PORT = 9000;

// set the view engine to ejs
app.set('view engine', 'ejs');

/* app.get('/', (req, res) => {
  res.render('home', {
    title: 'Welcome back, Guest'
  });
});

app.get('/:name', (req, res) => {
  res.send(`<h1>Welcome back, ${req.params.name}!</h1>`);
});
 */

app.get('/', (req, res) => {
  console.log(req.query);

  let data = req.query;
  console.log(data);
  if (data.name) {
    res.send(`<h1>Welcome back, ${data.name}</h1>`);
  } else {
    res.send(`<h1>Welcome back, Guest</h1>`);
  };

});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});