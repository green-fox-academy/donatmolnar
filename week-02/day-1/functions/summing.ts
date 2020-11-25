'use strict';

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

let parameter: number = 5;

function calculateSum(parameter: number): number {
  let sum: number = 0;
  for (let i: number = 0; i <= parameter; i++) {
    sum += i;
  }
  return sum;
}

console.log(calculateSum(parameter));
