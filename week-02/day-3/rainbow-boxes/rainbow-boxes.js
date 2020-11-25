'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

let color = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

function drawRect(x, y) {
	ctx.fillStyle = y;
	ctx.fillRect(300 - x / 2, 200 - x / 2, x, x);
}

let numOfRect = 10;

for (let i = 0; i < numOfRect; i++) {
	ctx.fillStyle = color[i];
	drawRect(600 - i * 70, color[i]);
}
