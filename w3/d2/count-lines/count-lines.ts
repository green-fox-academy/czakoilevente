'use strict'

const fs = require('fs');

function countTheLines(fileContent) {
  let fileContentt = fs.readFileSync('falafel.txt', 'utf-8');
  let content = fileContentt.split('\n');
  console.log(content.length);
};

countTheLines('falafel.txt')