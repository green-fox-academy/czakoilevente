'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//--------------------------------------------------------------------------------------

let tr = 200;

let x1 = 3;
let y1 = 0;

let x2 = 16;
let y2 = 1;


ctx.strokeStyle = 'purple';
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.stroke();


