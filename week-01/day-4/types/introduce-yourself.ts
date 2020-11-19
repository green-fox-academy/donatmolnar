'use strict';

// Write a program that prints a few details to the console about you
// It should print each detail to a new line.
//  - Your name
//  - Your age
//  - Your height in meters (as a decimal fraction)
//
//  Example output:
//  John Doe
//  31
//  1.87

let myName: string = 'Donat Molnar';
let myYearOfBirth: number = 1991;
let myHeight: number = 1.86;
let date = new Date();
let thisYear = date.getFullYear();

console.log(myName);
console.log(thisYear - myYearOfBirth);
console.log(myHeight + 'm');


