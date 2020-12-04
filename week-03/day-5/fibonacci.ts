'use strict';

//0, 1, 1, 2, 3, 5, 8, 13, 21 <= fibonacci
//1, 2, 3, 4, 5, 6, 7, 8,  9  <= nth input
//0, 1, 2, 3, 4, 5, 6, 7,  8  <= index

//why is it giving back the index and not the nth
function fibonacci(n: number) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(6));
