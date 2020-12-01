'use stric';

// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

const fs2 = require('fs');

try {
  let myName = 'Donat';
  function writeMyName(input: string): string {
    let name = fs2.writeFileSync(input, myName);
    return name;
  }
  writeMyName('my-file.txt');
} catch (e) {
  console.log('Unable to write file: my-file.txt');
}
