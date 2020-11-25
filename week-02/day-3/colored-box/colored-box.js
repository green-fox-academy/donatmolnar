'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// draw a box that has different colored lines on each edge.

ctx.strokeStyle = 'red';

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(100, 200);
ctx.stroke();

ctx.strokeStyle = 'lime';

ctx.beginPath();
ctx.moveTo(100, 200);
ctx.lineTo(200, 200);
ctx.stroke();

ctx.strokeStyle = 'blue';

ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(200, 100);
ctx.stroke();

ctx.strokeStyle = 'yellow';

ctx.beginPath();
ctx.moveTo(200, 100);
ctx.lineTo(100, 100);
ctx.stroke();
