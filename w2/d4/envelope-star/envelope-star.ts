'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//--------------- dont touch over this line

let tr = 50;  //<- mérethez alakító szorzó
//let t = 10;      // <- vonalak sűrűsége akar lenni

/* let x1 = 1;
let y1 = 0;   //<- állandó

let x2 = 10;  //<- állandó
let y2 = 1; */

/*
let x = 1;


function drawLine(x) {
    ctx.strokeStyle = 'purple';
    ctx.beginPath();
    ctx.moveTo(tr * x , tr * 0 * x +500);
    ctx.lineTo(tr * 10 , tr * x +500);
    ctx.stroke();
}

for (let k = 1; k < 11; k++) {
    drawLine(k)
};

// line1 x1      =   line1 y2+10
// line2 x1+10   =   line2 y2+10+10
// line1 y1      =   line1 x2 

function drawLine2(x) {
    ctx.strokeStyle = 'purple';
    ctx.beginPath();
    ctx.moveTo(tr * x , tr * 0 * x +500);
    ctx.lineTo(tr * 10 * x , tr * x );
    ctx.stroke();
}

for (let k = 1; k < 11; k++) {
    drawLine2(k)
};

*/



/* function drawLine2(x2, y1) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(tr * 0, tr * y1);
    ctx.lineTo(tr * x2, tr * 10);
    ctx.stroke();
}

for (let k = 1; k < t + 1; k++) {
    drawLine2(k, k)
}; */


//------------------------------------------------



let N: number = 100;
let W: number = 1000;
let H: number = 1000;



function drawLine3(x1, y1, x2, y2) {
    ctx.strokeStyle = 'purple';
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}
for (let k = 0; k < N + 1; k++) {
    drawLine3( W/2/N*k , (H/2)       , (W/2)             , (H/2/N*k) + (H/2));
    drawLine3( W/2     , (H/2/N*k)   , (W/2/N*k) + (W/2) , H - (H/2));
    drawLine3( W/2/N*k , H-(H/2)     , (W/2)             , (H-H/N*k)/2 );
    drawLine3( W/2     , (H-H/2/N*k) , (W/2) + (W/2/N*k) , H/2 )
};


    //drawLine3((W / N * k), H, W, k - (H / N * k))
    //drawLine3((W/N*k),  0,    (W),     (H/N*k));
    //drawLine3(0+(H/2),(k*H/N)+(H/2),(k*W/N)-(W/2),(H)-(W/2));

    // drawLine3(0 ,    (k*H/N) ,    (k*W/N),    (H) );

    //(N-k)  (H / N * k)