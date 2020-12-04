'use strict';

//Create a function called maxSum which expects an array of five integers as an input parameter 
//and returns the maximum values that can be calculated by summing exactly four of the five integers.

let theArray: number[] = [5, 2, 3, 1, 4];
let count1: number = 0;
let temp1: number = 0;

function maxSum(array: number[]) {
  if (count1 === array.length) {
    console.log('base case');
    return temp1;
  } else if (count1 === 0) {
      let minIndex: number = array.indexOf(Math.min(...array));
      array.splice(minIndex, 1);
      console.log('remove smallest: ' + array);
      count1++;
      return maxSum(array);
    } else {
      temp1 += array[count1];
      count1++;
      console.log('add');
      return maxSum(array);
    }
}

console.log(maxSum(theArray));
