'use strict';

const body = document.querySelector('body');

let random = Math.floor(Math.random() * 100);
console.log(random);

let getColor = () => {
  let randomColor = Math.floor(Math.random() * 255);
  return randomColor;
};

let addDivs = () => {
  for (let i = 0; i < random; i++) {
    let createDiv = document.createElement('div');
    createDiv.setAttribute(
      'style',
      `display: inline-block; height: 100px; width: 200px; background: rgb(${getColor()}, ${getColor()} ,${getColor()}); margin: 5px;`
    );
    body.appendChild(createDiv);
  }
};

addDivs();

let scrolling = false;

window.addEventListener('scroll', () => {
  scrolling = true;
});

setInterval(() => {
  if (scrolling) {
    scrolling = false;
    console.log(`Scroll position: ${window.scrollY}`);
    console.log(`Document height: ${document.body.clientHeight}`);
    if (window.scrollY > document.body.clientHeight - 1000) {
      addDivs();
    }
  }
}, 1000);
