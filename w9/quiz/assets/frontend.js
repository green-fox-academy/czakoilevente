'use strict';

let http = new XMLHttpRequest;
let body = document.querySelector('.body');
let answerButtons = document.getElementsByTagName('button');
let questionTag = document.querySelector('.question');
let score = 0;
let scoreBoard = document.querySelector('.score-board');
scoreBoard.innerHTML = `Your score is: ${score}`;

window.onload = () => {
  http.open('GET', '/game');
  http.onload = () => {
    let data = JSON.parse(http.response);
    console.log(data);

    questionTag.innerHTML = data[0].question;
    for (let i = 0; i < answerButtons.length; i++) {
      answerButtons[i].innerHTML = data[i].answer;
      answerButtons[i].onclick = () => {
        if (data[i].is_correct > 0) {
          answerButtons[i].style.background = 'green';
          score += 1;
          scoreBoard.innerHTML = `Your score is: ${score}`;
          alert('Látod... Tudsz te, ha akarok...');
          setTimeout(() => { getAnotherQuestion(); }, 3000);
        } else {
          answerButtons[i].style.background = 'red';
          alert('NO, u dumb!');
          setTimeout(() => { getAnotherQuestion(); }, 2000);
        }
      };
    };
  };
  http.send();
};

function getAnotherQuestion() {
  console.log('getting another question');
  http.open('GET', '/api/game');
  http.onload = () => {
    let data = JSON.parse(http.response);
    questionTag.innerHTML = data[0].question;
    for (let i = 0; i < answerButtons.length; i++) {
      answerButtons[i].innerHTML = data[i].answer;
      answerButtons[i].style.background = 'rgb(135, 135, 224)';
    }
  }
  http.send();
}

