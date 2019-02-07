/*
Symmetric matrix
Create a function named `isSymmetric` 
that takes an n×n integer matrix (two dimensional array/list) as a parameter
and returns true if the matrix is symmetric
or false if it is not.
(Symmetric means it has identical values along its diagonal axis from top-left to bottom-right,
as in the first example)
Example 1:
*/
let example1: number[][] =[
  [1, 0, 1],
  [0, 2, 2],
  [1, 2, 5]
];
/*Output:

true
Example 2:
*/
let example2: number[][] =[
  [7, 7, 7],
  [6, 5, 7],
  [1, 2, 1]
];
/*Output:

false
*/

function isSymmetricc(matrix: number[][]) {
  /*matrix[0][0] === matrix[0][0];
    matrix[0][1] === matrix[1][0];
    matrix[0][2] === matrix[2][0];

    matrix[1][0] === matrix[0][1];
    matrix[1][1] === matrix[1][1];
    matrix[1][2] === matrix[2][1];

    matrix[2][0] === matrix[0][2];
    matrix[2][1] === matrix[1][2];
    matrix[2][2] === matrix[2][2]; */

  //matrix[i][j] === matrix[i][j]

  console.log(matrix);
  let result: boolean = true;
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (matrix[i][j] !== matrix[j][i]){
          result = false;
          /*         console.log('Symmetric!')
        } else {console.log('Not symmetric!')} */
      };
    };
    return result
  };
};

isSymmetricc(example1);
console.log('-------------------')
isSymmetricc(example2);


/*
 function isSymmetric(matrix: number[][]): void {

  matrix[0][0] === matrix[0][0]
  matrix[1][0] === matrix[0][1]
  matrix[2][0] === matrix[0][2]

  matrix[0][1] === matrix[1][0]
  matrix[1][1] === matrix[1][1]
  matrix[2][1] === matrix[1][2]

  matrix[0][2] === matrix[2][0]
  matrix[][] === matrix[][]
  matrix[][] === matrix[][]
};
*/