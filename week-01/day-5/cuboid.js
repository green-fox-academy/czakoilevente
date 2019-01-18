'use strict';
// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000
var A = 600;
var V = 1000;
console.log("If a cuboid Volumes is 1000 and the Surface Area equals 600... ");
// V = a***3
// A = 6*a**2
var a = Math.cbrt(V);
console.log("...the dimension of the cuboid is: ", a);
