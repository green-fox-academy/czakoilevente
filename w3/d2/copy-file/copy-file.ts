

  const fs = require('fs');

function readAndWrite(fileContent) {

  let fileContentt = fs.readFileSync('test.txt', 'utf-8');
  fs.writeFileSync('text.txt', fileContentt);

  console.log(fileContentt)
};

readAndWrite('test.txt'); 