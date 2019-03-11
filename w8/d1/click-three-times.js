'use strict';

let button = document.querySelector('button');
let pTag = document.createElement('p');
let body = document.querySelector('body');
let counter = 0;
body.appendChild(pTag);

window.onload = setTimeout(() => {
  button.setAttribute('class', 'clickable')
}, 5000);

button.addEventListener('click', () => {
  if (button.getAttribute('class') == 'clickable') {
    counter += 1;
    pTag.innerText = `Counter state: ${counter}`;
    if (counter >= 3) {
      let p2Tag = document.createElement('p');
      body.appendChild(p2Tag);
      p2Tag.innerText = '5 seconds elapsed and clicked 3 times';
    };
  };
});