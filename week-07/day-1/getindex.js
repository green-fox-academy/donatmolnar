'use strict';

//Create a function that takes a list and a value, and returns the index of that value in the list. If the value is not it the list the function should return -1.

function getIndex(list, value) {
  if (list === undefined || value === undefined) {
    return - 1;
  } else {
    return list.indexOf(value);
  }
}

// ES5
module.exports = getIndex;
