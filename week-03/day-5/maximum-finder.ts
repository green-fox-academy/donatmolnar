'use strict';

//Write a function that finds the largest element of an array using recursion.

let myArray: number[] = [1, 3, 4, 5, 2, 543, 1024, 345];
let count: number = 0;
let temp: number = 0;

function findMax(numArray: number[]): number{
  if (count === numArray.length) {
    return temp;
  } else if (temp < numArray[count]) {
    temp = numArray[count]
    count++;
    return findMax(myArray);
  } else {
    count++;
    return findMax(myArray);
  }
}

console.log(findMax(myArray));
