'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let NumberOfLines: number = 100;
let Width: number         = 1000;
let Height: number        = 1000;

function drawLine3(x1: number, y1:number, x2: number, y2: number) {
  ctx.strokeStyle = 'teal';
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}
for (let k: number = 1; k < NumberOfLines ; k++) {

//Coordinates: X1                      Y1                                   X2                                    Y2
  drawLine3( Width/2/NumberOfLines*k , Height/2                           , Width/2                             , Height/2/NumberOfLines*k + Height/2 );
  drawLine3( Width/2                 , Height/2/NumberOfLines*k           , Width/2/NumberOfLines*k + Width/2   , Height - Height/2                   );
  drawLine3( Width/2/NumberOfLines*k , Height-(Height/2)                  , Width/2                             , (Height-Height/NumberOfLines*k)/2   );
  drawLine3( Width/2                 , Height-Height/2/NumberOfLines*k    , Width/2 + Width/2/NumberOfLines*k   , Height/2                            );
};