'use strict';
// An average Green Fox attendee codes 6 hours daily
var c = 6;
// The semester is 17 weeks long
var s = 17; //
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
var b = 5; //workdays r 5 on the week
var n = c * s * b;
console.log(n);
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52
var t = 52;
var r = t * s; //total working hours in 17 weeks
var e = n / r * 100; //percentage result
console.log(e);
