//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

'use strict'

function unique(oneArr: number[]): number[] {
  let tempArr: number[] = oneArr.sort();
  for (let i: number = 0; i < oneArr.length; i++) {
    while (tempArr[i] === tempArr[i + 1]) {           //using while for more than 3 times appearing the same element
      tempArr.splice(i, 1);
    };
  };
  return tempArr;
};

//  Example
//console.log(unique([1, 11, 34, 11, 52, 61, 1, 34, 11]))
//  should print: `[1, 11, 34, 52, 61]`

function unique2(oneArr: number[]): number[] {
  let tempArr : number[] = [];
  let tempObj : object = {};
  for (let i: number = 0; i < oneArr.length; i++) {
    let elem: number = oneArr[i];       // if (elem in tempObj) = is there this spec elem(as key) in the object
    if (!(elem in tempObj)){            // <- if there is NOT a spec key(elem) in the object 
      tempObj[elem] = 1;                // https://stackoverflow.com/questions/455338/how-do-i-check-if-an-object-has-a-key-in-javascript
      tempArr.push(elem);
    };
  };
  return tempArr;
};