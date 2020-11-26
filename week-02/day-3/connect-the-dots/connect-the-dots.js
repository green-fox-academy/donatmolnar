'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let dots = [
  [10, 10],
  [290, 10],
  [290, 290],
  [10, 290],
];
let dots2 = [
  [50, 100],
  [70, 70],
  [80, 90],
  [90, 90],
  [100, 70],
  [120, 100],
  [85, 130],
  [50, 100],
];

function connectTheDots(input) {
  function connect(x, y, z, z1) {
    ctx.strokeStyle = 'lime';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(z, z1);
    ctx.stroke();
  }

  for (let i = 0; i < input.length; i++) {
    if (i === input.length - 1) {
      connect(input[i][0], input[i][1], input[0][0], input[0][1]);
    } else {
      connect(input[i][0], input[i][1], input[i + 1][0], input[i + 1][1]);
    }
  }

  /*
for (let i = 0; i < dots2.length; i++) {
  if (i === dots2.length - 1) {
    connect(dots2[i][0], dots2[i][1], dots2[0][0], dots2[0][1]);
  } else {
    connect(dots2[i][0], dots2[i][1], dots2[i + 1][0], dots2[i + 1][1]);
  }
}
*/
}

connectTheDots(dots);
connectTheDots(dots2);

/*
connect(dots[0][0], dots[0][1], dots[1][0], dots[1][1]);
connect(dots[1][0], dots[1][1], dots[2][0], dots[2][1]);
connect(dots[2][0], dots[2][1], dots[3][0], dots[3][1]);
connect(dots[3][0], dots[3][1], dots[0][0], dots[0][0]);
*/

/* 
    0     1   x
 0 [[10, 10], 
 1 [290,  10], 
 2 [290, 290], 
 3 [10, 290]]
 y

 arr[x][y] = 
 */
