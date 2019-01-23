'use strict';

let number: number = 15;

// Create a program that
// prints the multiplication table with number
//
// Example:
// The number 15 should print:
//
// 1 * 15 = 15
// 2 * 15 = 30
// 3 * 15 = 45
// 4 * 15 = 60
// 5 * 15 = 75
// 6 * 15 = 90
// 7 * 15 = 105
// 8 * 15 = 120
// 9 * 15 = 135
// 10 * 15 = 150

//-------------------------------------------------

    console.log("1 * ", number, " = ", 1*number)
    console.log("2 * ", number, " = ", 2*number)
    console.log("3 * ", number, " = ", 3*number)
    console.log("4 * ", number, " = ", 4*number)
    console.log("5 * ", number, " = ", 5*number)
    console.log("6 * ", number, " = ", 6*number)
    console.log("7 * ", number, " = ", 7*number)
    console.log("8 * ", number, " = ", 8*number)
    console.log("9 * ", number, " = ", 9*number)
    console.log("10 * ", number, " = ", 10*number)

//----------------------------------------------------

let g = 10
let i

for (i=1; i<=g; i++) {
    console.log(i, " * ", number, " = ", i*number)
}

