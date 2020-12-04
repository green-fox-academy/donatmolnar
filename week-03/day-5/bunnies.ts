'use strict';

//We have a number of bunnies and each bunny has two big floppy ears.
//We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function countEars(num: number): number {
  if (num < 1) {
    return 0;
  } else {
    return 2 + countEars(num - 1);
  }
}

console.log(countEars(12));
