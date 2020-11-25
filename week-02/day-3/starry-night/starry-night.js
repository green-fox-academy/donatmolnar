'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

let color = ['red', 'lime', 'white', 'yellow'];

function drawRect(x, y) {
  ctx.fillRect(x, y, 2, 2);
}

let numOfRect = 400;

for (let i = 1; i < numOfRect; i++) {
  ctx.fillStyle = color[i];
  drawRect(Math.random() * 600, Math.random() * 600);
}
