'use strict'

const fs = require('fs');

function modifyFile(fileContent) {
  fs.writeFileSync('my-file.txt', '\n Levente \n', 'utf-8' );
};



modifyFile('my-file.txt')
