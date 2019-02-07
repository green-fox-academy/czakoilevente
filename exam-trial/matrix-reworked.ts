/*
Symmetric matrix
Create a function named `isSymmetric` 
that takes an n×n integer matrix (two dimensional array/list) as a parameter
and returns true if the matrix is symmetric
or false if it is not.
(Symmetric means it has identical values along its diagonal axis from top-left to bottom-right,
as in the first example)

/*  matrix[0][0] === matrix[0][0];
    matrix[0][1] === matrix[1][0];
    matrix[0][2] === matrix[2][0];

    matrix[1][0] === matrix[0][1];
    matrix[1][1] === matrix[1][1];
    matrix[1][2] === matrix[2][1];

    matrix[2][0] === matrix[0][2];
    matrix[2][1] === matrix[1][2];
    matrix[2][2] === matrix[2][2]; */

  //matrix[i][j] === matrix[i][j]

// SOLUTION OF THE TASK STARTS FROM HERE (upper part only for self guide)

let example1: number[][] =[
  [1, 0, 1],
  [0, 2, 2],
  [1, 2, 5]
];

let example2: number[][] =[
  [7, 7, 7],
  [6, 5, 7],
  [1, 2, 1]
];

function isSymmetricc(matrix: number[][]) {
  
  console.log(matrix); //just to see the content of actual array

  let result: boolean = true;
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (matrix[i][j] !== matrix[j][i]){
          result = false;
        };
    };
  };
  return result
};

console.log(isSymmetricc(example1));
console.log('-------------------')
console.log(isSymmetricc(example2));
