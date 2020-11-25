'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.

ctx.strokeStyle = 'lime';

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(600, 400);
ctx.stroke();

ctx.strokeStyle = 'red';

ctx.beginPath();
ctx.moveTo(0, 400);
ctx.lineTo(600, 0);
ctx.stroke();



