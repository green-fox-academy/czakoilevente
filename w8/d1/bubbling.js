let buttons = document.getElementsByTagName('button');
let navTag = document.querySelector('nav');
let backgroundImg = document.querySelector('div');

backgroundImg.style.backgroundSize = '200%';
backgroundImg.style.backgroundPositionX = '0px';
backgroundImg.style.backgroundPositionY = '0px';

const zoom = (event) => {
  if (event.target.dataset.direction == "out" && parseFloat(backgroundImg.style.backgroundSize) > 100) {
    backgroundImg.style.backgroundSize = parseFloat(backgroundImg.style.backgroundSize) - 20 + '%';
  } else if (event.target.dataset.direction == "in") {
    backgroundImg.style.backgroundSize = parseFloat(backgroundImg.style.backgroundSize) + 20 + '%';
  }
}

const move = (event) => {
  if (event.target.dataset.direction == "up" && parseFloat(backgroundImg.style.backgroundSize) > 100) {
    backgroundImg.style.backgroundPositionY = parseFloat(backgroundImg.style.backgroundPositionY) + 10 + 'px';
  } else if (event.target.dataset.direction == "down" && parseFloat(backgroundImg.style.backgroundSize) > 100) {
    backgroundImg.style.backgroundPositionY = parseFloat(backgroundImg.style.backgroundPositionY) - 10 + 'px';
  } else if (event.target.dataset.direction == "left" && parseFloat(backgroundImg.style.backgroundSize) > 100) {
    backgroundImg.style.backgroundPositionX = parseFloat(backgroundImg.style.backgroundPositionX) + 10 + 'px';
  } else if (event.target.dataset.direction == "right" && parseFloat(backgroundImg.style.backgroundSize) > 100) {
    backgroundImg.style.backgroundPositionX = parseFloat(backgroundImg.style.backgroundPositionX) - 10 + 'px';
  }
};

navTag.addEventListener('click', zoom);
navTag.addEventListener('click', move);
