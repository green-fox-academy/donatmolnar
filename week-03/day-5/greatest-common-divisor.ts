'use strict';

//Find the greatest common divisor of two numbers using recursion.

function greatestCommonDivisor(num1: number, num2: number): number {
  if (!num2) {
    return num1;
  } else {
    return greatestCommonDivisor(num2, num1 % num2);
  }
}

console.log(greatestCommonDivisor(10, 15));
