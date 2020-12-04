'use strict';

//Given base and n that are both 1 or more,
//compute recursively (no loops) the value of base to the n power, 
//so powerN(3, 2) is 9 (3 squared).

function powerN(base: number, n: number) {
  if (base <= 1 && n <= 1) {
    return 1;
  }
  return n * powerN(base, n - 1);
}

powerN(2, 3);
