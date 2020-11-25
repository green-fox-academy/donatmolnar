'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function drawALine(x, y) {
  ctx.strokeStyle = 'lime';
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(300, 200);
  ctx.stroke();
}

for (let i = 0; i <= 30; i++) {
  drawALine(i * 20, 0);
}

for (let i = 0; i <= 20; i++) {
  drawALine(0, i * 20);
}

for (let i = 0; i <= 30; i++) {
  drawALine(i * 20, 400);
}

for (let i = 0; i <= 20; i++) {
  drawALine(600, i * 20);
}
