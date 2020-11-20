'use strict';

let lineCount1: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is


for (let i:number = 1; i <= lineCount1; i++) {
        let asterisk: string = " ";
        for (let j: number = 1; j <= lineCount1; j++) {
            if (j <= i) { 
                asterisk += "*"; 
            }
        }
        console.log(asterisk);
    }