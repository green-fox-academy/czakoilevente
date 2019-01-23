'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas.



function drawLine(x1,y1,x2,y2) {
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(x1, y1);             
    ctx.lineTo(x2, y2);
    ctx.stroke();
    };

function drawSquare (x,y,s) {
    let a = s/2;
    drawLine(x-a,y-a,x+a,y-a );
    drawLine(x-a,y-a,x-a,y+a);
    drawLine(x+a,y-a,x+a,y+a);
    drawLine(x+a,y+a,x-a,y+a);
};

drawSquare(300,200,10)

//-------------------------------------------

