'use strict';

//  Create a function that takes a number and an array of numbers as a parameter
//  Returns the indices of the numbers in the array of which the first number is a part of
//  Or returns an empty list if the number is not part of any of the numbers in the array

//only finds the first occurence atm
function subint(value: number, arr: number[]): number[] {
  let newArr = [];  
  for(let i: number = 0; i < arr.length; i++) {
    if (arr.toString().indexOf(value.toString()) === - 1) {
    } else {
      newArr.push(arr.indexOf(value));
    }
  }
  return newArr;
}

// Example
console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'