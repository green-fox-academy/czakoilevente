'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables


//section defining amount in "time digits"

const lh: number = 24   //lh = last hour
const lm: number = 60   //lm = last minute
const ls: number = 60   //ls = last second


//setcion for counting remaining time

let rh: number = lh-currentHours      //rh = remaining hours
let rm: number = lm-currentMinutes    //rm = remaining minutes
let rs: number = ls-currentSeconds    //rm = remaining seconds


//section for counting remaining time in seconds

let rhs: number = rh*3600    //rhs = remaining hours in seconds
let rms: number = rm*60      //rms = remaining minutes in seconds
let rss: number = rs         //rss = remaining seconds  <= totally irrelevant line, only for understanding concept


//section counting remaining seconds in a day

let trs: number = rhs+rms+rs

console.log("Remaining time of the day in seconds is: ", trs)