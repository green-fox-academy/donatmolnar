'use strict';

//Given base and n that are both 1 or more,
//compute recursively (no loops) the value of base to the n power, 
//so powerN(3, 2) is 9 (3 squared).

let counter: number = 1;

function powerN(base: number, n: number) {
  if (n < 1) {
    return counter;
  }
  counter *= base;
  n--;
  return powerN(base, n);
}

console.log(powerN(2, 10));
