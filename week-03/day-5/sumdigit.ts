'use strict';

//Given a non-negative integer n, 
//return the sum of its digits recursively (without loops).

let count: number = 0;

function sumDigit(n: number): number {
  if (n <= 1) {
    return count + n;
  } else {
    count += n % 10;
    n = Math.floor(n / 10);
    return sumDigit(n);
  }
}

console.log(sumDigit(54321));
