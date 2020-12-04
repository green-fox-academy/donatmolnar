'use strict';

//Given a string, compute recursively (no loops)
//a new string where all the lowercase 'x' chars have been changed to 'y' chars.

function xChange(string: string): string {
  if (string.indexOf('x') === -1) {
    return string;
  } else {
    return xChange(string.replace('x', 'y'));
  }
}

console.log(xChange('xOXXXOxOxx'));
