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

let asterisk: string = '*';

for (let i: number = 1; i <= lineCount2; i++) {
	let space: string = '';
	for (let j: number = lineCount2 - i; j > 0; j--) {
		space += ' ';
	}
	console.log(space + asterisk);
	asterisk += '**';
}
