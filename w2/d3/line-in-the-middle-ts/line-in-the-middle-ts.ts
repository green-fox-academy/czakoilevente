'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.

ctx.beginPath();
ctx.fillStyle = black;
ctx.moveTo(200, 100);
ctx.lineTo(400, 100);
ctx.stroke();

ctx.fillStyle = black;
ctx.moveTo(50, 100);
ctx.lineTo(50, 300);
ctx.stroke();
