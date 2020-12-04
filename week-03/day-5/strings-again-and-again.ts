'use strict';

//Given a string, compute recursively a new string 
//where all the adjacent chars are now separated by a *

let i = 0;

function addAsterisk(string: string): string {
  i += 2;
  if (i = string.length) {
    return string;
  } else {
    return addAsterisk(string.replace(string[i], `${string[i]}*`));
  }
}

let string = 'valami és valami';

console.log(addAsterisk(string));
