'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.

function drawALine(x, y) {
	ctx.strokeStyle = 'lime';
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(300, 200);
	ctx.stroke();
}

// drawALine(200,200);

let numOfLines = 3;

for (let i = 1; i <= numOfLines; i++) {
	drawALine(i * 100, i * 100);
}
