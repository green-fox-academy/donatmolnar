'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

let numOfTri = 21;
let color = 'lime';
let centerX = 300;
let side = 20;
let height = (Math.sqrt(3) / 2) * side;

function drawATriangle(topX, topY, bottomX, bottomY, bottom2X, bottom2Y) {
  ctx.strokeStyle = color;
  ctx.beginPath();

  ctx.moveTo(topX, topY);
  ctx.lineTo(bottomX, bottomY);

  ctx.moveTo(topX, topY);
  ctx.lineTo(bottom2X, bottom2Y);

  ctx.moveTo(bottomX, bottomY);
  ctx.lineTo(bottom2X, bottom2Y);

  ctx.stroke();
}

//good
//drawATriangle(centerX, 0, centerX - side / 2, Math.sqrt(3) / 2 * side, centerX + side / 2, Math.sqrt(3) / 2 * side);

for (let i = 0; i <= numOfTri; i++) {
  /*drawATriangle(
      centerX - i * side / 2, (i - 1) * height, 
      centerX - i * side / 2, i * height,
      centerX + i * side / 2, i * height
  ); */

  let leftX = centerX - i * side / 2;
  let leftY = i * height;

  let rightX = centerX + i * side / 2;
  let rightY = i * height;


  for (let j = 0; j <= numOfTri; j++) {
    drawATriangle(
        leftX, leftY,
        leftX - j * side / 2, j * height,
        leftY + j * side / 2, j * height
    );

    drawATriangle(
        rightX, rightY,
        rightX - j * side / 2, j * height,
        rightY + j * side / 2, j * height
    );
  }
  
}
