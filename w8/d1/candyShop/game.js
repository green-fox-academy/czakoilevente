'use strict';
let createButton = document.querySelector(".create-candies");
let buyButton = document.getElementsByClassName("buy-lollypops")[0];
let rainButton = document.getElementById("candy-machine");

let candies = document.getElementsByClassName("candies")[0];
let lollypops = document.getElementsByClassName("lollypops")[0];
let canPerSec = document.getElementsByClassName("speed")[0];

createButton.addEventListener('click', () => {
  let count = parseFloat(candies.textContent);
  count += 1;
  candies.textContent = count;
});

buyButton.addEventListener('click', () => {
  //console.log(parseFloat(candies.textContent));
  if (parseFloat(candies.textContent) >= 100) {
    candies.textContent -= 100;
    lollypops.textContent += '🍭';
    parseFloat(canPerSec.textContent);
    canPerSec.textContent = Math.floor(parseFloat(lollypops.textContent) / 10);
  };
});

console.log();

