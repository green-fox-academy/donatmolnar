'use strict';

//Given a string, compute recursively a new string
//where all the adjacent chars are now separated by a *

let string = 'ASTERISK-OVERLOAD';
let i: number = 0;

function addAsterisk(string: string): string {
  if (i === 1) {
    return string;
  } else {
    i++;
    return addAsterisk(string.split('').join('*'));
  }
}

console.log(addAsterisk(string));
