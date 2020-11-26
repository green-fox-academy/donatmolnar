'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function drawALine(x, y, z, z1) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(z, z1);
  ctx.stroke();
}

let numOfLines = 20;

for (let i = 0; i <= numOfLines; i++) {
  ctx.strokeStyle = 'purple';
  let vCount = numOfLines;
  drawALine(i * 20, 0, numOfLines * 20, vCount * i);
  vCount++;
}

for (let i = 0; i <= numOfLines; i++) {
    ctx.strokeStyle = 'lime';
    let hCount = numOfLines;
    drawALine(hCount * i, numOfLines * 20, 0, i * 20);
    hCount++;
  }

/*
  for (let i = 0; i <= 20; i++) {
    drawALine(0, i * 20);
  }
  
  for (let i = 0; i <= 30; i++) {
    drawALine(i * 20, 400);
  }
  
  for (let i = 0; i <= 20; i++) {
    drawALine(600, i * 20);
  }
  */
