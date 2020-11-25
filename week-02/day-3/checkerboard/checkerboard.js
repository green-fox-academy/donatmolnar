'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function drawRect(x, y) {
  ctx.fillStyle = 'green';
  let size = 50;
  ctx.fillRect(x, y, size, size);
  ctx.strokeRect(x, y, size, size);
}

let numOfRect = 6;

for (let i = 0; i <= numOfRect; i++) {
  drawRect(i * 100, 0);
  drawRect(i * 100 + 50, 50);
  drawRect(i * 100, 100);
  drawRect(i * 100 + 50, 150);
  drawRect(i * 100, 200);
  drawRect(i * 100 + 50, 250);
  drawRect(i * 100, 300);
  drawRect(i * 100 + 50, 350);
}
