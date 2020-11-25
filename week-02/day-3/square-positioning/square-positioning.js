'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

var color = ['red', 'lime', 'white', 'yellow'];

function drawRect(x, y) {
	ctx.fillRect(x, y, 50, 50);
}

let numOfRect = 3;

for (let i = 0; i < numOfRect; i++) {
	ctx.fillStyle = color[i];
	drawRect(i * 100, i * 100);
}