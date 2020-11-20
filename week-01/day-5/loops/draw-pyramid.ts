'use strict';

let lineCount2: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for (let i:number = 1; i <= lineCount2; i++) {
    let asterisk: string = ' ';
    let space: string = '\xa0'
    for (let k: number = 1; k <= lineCount2; k++) {
        console.log(space);
    }

    for (let j: number = 1; j <= lineCount2; j++) {
        
        if (j <= i) { 
            asterisk += "*"; }
    }
    console.log(asterisk);
}

