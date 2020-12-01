'use strict';

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs1 = require('fs');

//try {
//function getFileName(filePath: string): string {
//  let fileName = filePath.replace(/^(.*[/\\])?/, '').replace(/(\.[^.]*)$/, '');
//  return fileName;
//}
//console.log(getFileName('test.txt'));
//}

try {
  // read contents of the file
  const data = fs1.readFileSync('test.txt', 'UTF-8');

  // split the contents by new line
  //const lines = data.split(/\r?\n/);
  console.log(data.length);

  // print all lines
  //data.forEach((line) => {
  //    console.log(line);
  //});
} catch (e) {
  console.error(e);
}
