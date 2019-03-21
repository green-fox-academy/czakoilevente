'use strict';

let http = new XMLHttpRequest;
let body = document.querySelector('.body');
let answerButtons = document.getElementsByClassName('button');
let questionTag = document.querySelector('.question');

window.onload = () => {
  http.open('GET', '/game');
  http.onload = () => {
    let data = JSON.parse(http.response);
    console.log('dasd');
    console.log(data);

    questionTag.innerHTML = data[0].question;
    for (let i = 0; i < answerButtons.length; i++) {
      answerButtons[i].innerHTML = data[i].answer;
      console.log(answerButtons[i].value);
      console.log(data[i].value);
    }

    


  }
  http.send();
};