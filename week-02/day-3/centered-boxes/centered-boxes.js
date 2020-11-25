'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

var color = ['red', 'lime', 'white', 'yellow'];

function drawRect(x) {
  ctx.fillRect(300 - x / 2, 200 - x / 2, x, x);
}

let numOfRect = 4;

for (let i = 0; i < numOfRect; i++) {
  ctx.fillStyle = color[i];
  drawRect(300 / i);
}
