'use strict';

let lineCount: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let a: number = 1
let sor: string = ""


for (a; a <= lineCount; a++) {
    sor += '*'   //sor = sor + "*"
    console.log(sor);

}

