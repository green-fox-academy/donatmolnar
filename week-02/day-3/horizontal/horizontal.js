'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.

function drawALine(x, y) {
  ctx.strokeStyle = 'lime';
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 50, y);
  ctx.stroke();
}

let numOfLines = 3;

for (let i = 1; i <= numOfLines; i++) {
  drawALine(i * 100, i * 100);
}
