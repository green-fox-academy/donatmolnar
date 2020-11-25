'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Draw four different size and color rectangles.
// Avoid code duplication.

var color = ['red', 'lime', 'white', 'yellow'];

function drawRect(x, y) {
	ctx.fillRect(x, y, 20, 20);
}

let numOfRect = 4;

for (let i = 0; i < numOfRect; i++) {
	ctx.fillStyle = color[i];
	drawRect(i * 20, i * 20);
}
