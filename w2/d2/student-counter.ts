'use strict';

const students: any[] = [
  { name:    'Theodor', 
    age:     3, 
    candies: 2},
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies
// © 2019 GitHub, Inc.

// function countNames(x: any)

let candyCount: number = 0                      //
                                                                                                
students.forEach(                               // <- 
  function (person){                            //   
   //console.log(person.candies)                //   
    candyCount = candyCount + person.candies    //
  },                                            //
);                                              //
                                                
console.log(candyCount);                        // 

// let keyArr = students.keys().split(",").length
// for -> összeszámolni hányszor fut let a loop

let nameList = ""

students.forEach(
  function (person) {
  nameList = nameList + person.name}
);


let ageCount: number = 0

students.forEach(
  function (person){
    if (person.candies < 5)
    ageCount = ageCount + person.age 
  }  
);
console.log("Count of ages will be: " + ageCount)