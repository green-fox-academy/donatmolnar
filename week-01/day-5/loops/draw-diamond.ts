'use strict';

let lineCount3: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

for (let i = 0; i < lineCount3; i++) {
	let asterisk3: string = '';
	if (i < lineCount3 / 2) {
		for (let j = 1; j < lineCount3 - i; j++) {
			asterisk3 += ' ';
		}
		for (let k = 1; k <= 2 * i + 1; k++) {
			asterisk3 += '*';
		}
		console.log(asterisk3);
	} else {
		for (let j = 0; j < i; j++) {
			asterisk3 += ' ';
		}
		for (let k = 1; k < (lineCount3 - i) * 2; k++) {
			asterisk3 += '*';
		}
		console.log(asterisk3);
	}
}