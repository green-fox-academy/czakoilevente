'use strict';

const express = require('express');
const app = express();
const PORT = 3000;


app.use('/assets', express.static('assests'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.listen(PORT, () => {
  console.log('litening to port 3000');
});


/* 
npm init -y
npm install express --save

*/