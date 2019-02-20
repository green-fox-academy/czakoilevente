// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

'use strict'

let ai: number[] = [3, 4, 5, 6, 7];

function sumAll(oneArr: number[]): number {
  let arrToSum: number[] = oneArr;
  return arrToSum.reduce((a, b) => a + b);
};

console.log(sumAll(ai));