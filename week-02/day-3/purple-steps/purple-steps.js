'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function drawRect(x, y) {
  ctx.fillRect(x, y, 10, 10);
}

let numOfRect = 20;

for (let i = 1; i < numOfRect; i++) {
  ctx.fillStyle = 'purple';
  drawRect(i * 10, i * 10);
}
