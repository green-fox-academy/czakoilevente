'use strict';

let http = new XMLHttpRequest;
let body = document.querySelector('.body');
let newQestion = document.getElementById('new-question');
let submitButton = document.querySelector('.submit');
let questionInput = document.getElementById('new-question');

submitButton.onclick = () => {
  http.open('POST', '/api/questions');
  http.onload = () => {
    //console.log(questionInput.value);
    console.log(JSON.stringify(getFormData()));
    console.log(typeof JSON.stringify(getFormData()));
  };
  http.setRequestHeader('Content-Type', 'application/json');
  http.send(JSON.stringify(getFormData()));
};

function getFormData() {
  let responseObject = {
    'question': questionInput.value
  };
  return responseObject;
};