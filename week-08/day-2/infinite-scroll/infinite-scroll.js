'use strict';

let body = document.getElementById('body');

let random = Math.floor(Math.random() * 100);
console.log(random);

let addDivs = () => {
  for (let i = 0; i < random; i++) {
    let createDiv = document.createElement('div');
    body.appendChild(createDiv);
  }
}

