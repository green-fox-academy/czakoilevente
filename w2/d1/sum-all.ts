// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

'use strict'

let ai: number[] = [3, 4, 5, 6, 7];

//========== solution with reduce ========

function sumAll(oneArr: number[]): number {
  let arrToSum: number[] = oneArr;
  return arrToSum.reduce((a, b) => a + b);
};

console.log(sumAll(ai));

//=============== solution with foreach =========

let sum: number = 0;
ai.forEach((element: number) => sum + element );
console.log(sum);