// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

'use strict'

function diagArrDraw(oneNum: number): number[][] {
  let finalArr: number[][] = [];

  for (let i: number = 0; i < oneNum; i++) {
    let row: number[] = [];
    for (let j: number = 0; j < oneNum; j++) {
      if (row[j] === oneNum - 1 - i) {
        row.push(1);
      } else {
        row.push(0);
      };
      finalArr.push(row);
    };
  };

  return finalArr;
};

console.log(diagArrDraw(4));