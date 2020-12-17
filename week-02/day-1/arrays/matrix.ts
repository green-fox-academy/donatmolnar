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

let num: number = 6;
let matrix: number[][] = [];

for (let i: number = 0; i < num; i++) {
  let matrixLine: number[] = [];
  for (let j: number = 1; j <= num; j++) {
    if (i === num - j) {
      matrixLine.push(1);
    } else {
      matrixLine.push(0);
    }
  }
  matrix.push(matrixLine);
}

console.log(matrix);
