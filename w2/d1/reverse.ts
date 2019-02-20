// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

'use strict'

let numList: number[] = [3, 4, 5, 6, 7];

//console.log('Solution 1: ' + numList.reverse());

function reverseArr(oneArr: number[]): number[] {
  let tempArr: number[] = [];
  for (let i: number = 0; i < oneArr.length; i++) {
    tempArr.push(oneArr[oneArr.length - 1 - i]);
  };
  return tempArr;
};

console.log('Solution 2: ' + reverseArr(numList));