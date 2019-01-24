'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//--------------------------------------------------------------------------------------

let tr = 100;

let x1 = 1;
let y1 = 0;   //<- állandó

let x2 = 10;  //<- állandó
let y2 = 1;

let t = 10      // <- vonalak sűrűsége


function drawLine(x1, y2) {
ctx.strokeStyle = 'purple';
ctx.beginPath();
ctx.moveTo(tr * x1, tr * 0);
ctx.lineTo(tr * 10, tr * y2);
ctx.stroke();
}

for (let k = 1; k < 11; k++) {
    drawLine(1+k, k)
};



// line1 x1      =   line1 y2+10
// line2 x1+10   =   line2 y2+10+10

// line1 y1      =   line1 x2 


