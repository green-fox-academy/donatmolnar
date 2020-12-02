'use strict';

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs1 = require('fs');

function countLines(input: string): number {
  try {
    let data = fs1.readFileSync(input, 'UTF-8');
    let numOfLines = data.search(/\n/) + 1;
    return numOfLines;
  } catch {
    console.log('0');
  }
}

countLines('test.txt');
