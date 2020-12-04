'use strict';

//Given a string, compute recursively a new string where all the 'x' chars have been removed.

function xRemove(string: string): string {
  if (string.indexOf('x') === -1 && string.indexOf('X') === -1) {
    return string;
  } else {
    return xRemove(string.replace('x', '').replace('X', ''));
  }
}

console.log(xRemove('xOXXXOxOxx'));
