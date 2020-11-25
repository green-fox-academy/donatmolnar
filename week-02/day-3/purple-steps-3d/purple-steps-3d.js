'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function drawRect(x, y, size) {
    ctx.fillRect(x, y, size, size);
    ctx.strokeRect(x, y, size, size);
}

let numOfRect = 20;

for (let i = 1; i < numOfRect; i++) {
    ctx.fillStyle = 'purple';
    let step = i * i; //Math.pow(i, 2); - ez még csalás
    let change = i * 2;
	drawRect(step, step, change, change);
}