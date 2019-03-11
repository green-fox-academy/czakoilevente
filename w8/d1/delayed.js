'use strict';
let body = document.querySelector('body');
let button = document.querySelector('button');
console.log(body);

button.addEventListener('click', () => {
  setTimeout(function () {
    let divTag = document.createElement('div');
    body.appendChild(divTag);
    divTag.innerText = '2 seconds ellapsed';
  }, 2000);
});
