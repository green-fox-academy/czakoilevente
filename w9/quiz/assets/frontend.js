'use strict';

let http = new XMLHttpRequest;
let body = document.querySelector('.body');

window.onload = () => {
  http.open('/game');
  http.onload = () => {
    let data = JSON.parse(http.responseText);
    console.log('dasd');

  }
};