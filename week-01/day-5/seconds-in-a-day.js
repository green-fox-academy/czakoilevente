'use strict';
var currentHours = 14;
var currentMinutes = 34;
var currentSeconds = 42;
// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables
//section defining amount in "time digits"
var lh = 24; //lh = last hour
var lm = 60; //lm = last minute
var ls = 60; //ls = last second
//setcion for counting remaining time
var rh = lh - currentHours; //rh = remaining hours
var rm = lm - currentMinutes; //rm = remaining minutes
var rs = ls - currentSeconds; //rm = remaining seconds
//section for counting remaining time in seconds
var rhs = rh * 3600; //rhs = remaining hours in seconds
var rms = rm * 60; //rms = remaining minutes in seconds
var rss = rs; //rss = remaining seconds  <= totally irrelevant line, only for understanding concept
//section counting remaining seconds in a day
var trs = rhs + rms + rs;
console.log("Remaining time of the day in seconds is: ", trs);
