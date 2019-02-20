// -  Create an array named numList with the following content: [1, 2, 3, 8, 5, 6]
// -  Change the 8 to 4 with the .map method.
// -  Print the fourth element as a test


'use strict'

let numList: number[] = [1, 2, 3, 8, 5, 6];

function changeElement(oneArray: number[]): number[] {
  return oneArray.map((element: number): number => {
    if (element === 8) {
      return 4;
    } else {
      return element;
    }
  });
};

// test01: Print the fourth element as a test
console.log(changeElement(numList)[3]);

// test02: Print the full array
console.log(changeElement(numList));

//////////////////////////////////////////////////////////////////////////

console.log([1, 2, 3].map((a) => { return a + 1; }));     // [2,3,4]    //

console.log(myMap([1, 2, 3], (a) => { return a + 1; }));  // [2,3,4]    //

function myMap(arr, f) {                                                //
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {                                //
    finalArr.push(f(arr[i]));
  };                                                                    //
  return finalArr;
};                                                                      //

//////////////////////////////////////////////////////////////////////////