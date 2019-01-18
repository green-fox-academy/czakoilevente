'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let A:number = 600
let V:number = 1000

console.log("If a cuboid Volumes is 1000 and the Surface Area equals 600... ")

// V = a***3
// A = 6*a**2

let a:number= Math.cbrt(V)

console.log("...the dimension of the cuboid is: ", a )

//---------------------------------------------------------------------------------

console.log("-----------------------------------------------------------------")

let e:number= 1.789
let f:number= 5.123
let g:number= 2.6987

console.log("Surface Area: ", 2*(e*f+f*g+g*e))
console.log("Volume: ", e*f*g)