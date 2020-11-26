'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function drawALine(x, y, toX, toY) {
  ctx.strokeStyle = 'lime';
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(toX, toY);
  ctx.stroke();
}

let numOfLines = 15;
let centerX = 300;
let centerY = 200;

//bottom left
for (let i = 0; i <= numOfLines; i++) {
  //let vCount = numOfLines;
  drawALine(i * 20, 200, numOfLines * 20, 200 + numOfLines * i);
  //vCount++;
}

//top left
for (let i = 0; i <= numOfLines; i++) {
  drawALine(i * 20, 200, numOfLines * 20, 200 - (i * 20 ));
}

//bottom right
for (let i = 0; i <= numOfLines; i++) {
    drawALine(numOfLines * 20, 200 + numOfLines * i , 600 - i * 20, 200);
}

//top right
for (let i = 0; i <= numOfLines; i++) {
drawALine(centerX + i * 20, centerY, centerX, -100 + i * 20)

}

/*
for (let i = 0; i <= numOfLines; i++) {
    let hCount = numOfLines;
    drawALine(hCount * i, numOfLines * 20, 0, i * 20);
    hCount++;
  }
  */