'use strict';

// Here is an image inspector, but the buttons are not implemented yet, that will
// be your task!
//  - the nav buttons (up, down, left, right) move the background by 10px
//  - the zoom buttons increase/decrease the image by 20%
//  - attach only two event listeners to the nav element
//    - one for navigation
//    - one for zooming

let image = document.querySelector('.img-inspector');
let size = 200;
let posX = 0;
let posY = 0;

// zoom in and zoom out function
let zoom = (input) => {
  if (input === 'in') {
    size += 20;
  } else if (input === 'out') {
    size -= 20;
  }
  image.setAttribute('style', `background-size: ${size}%;`);
}

let move = (input) => {
  if (input === 'left') {
    posX += 10;
    image.setAttribute('style', `background-position-x: ${posX}px;`);
  } else if (input === 'right') {
    posX -= 10;
    image.setAttribute('style', `background-position-x: ${posX}px;`);
  } else if (input === 'up') {
    posY += 10;
    image.setAttribute('style', `background-position-y: ${posY}px;`);
  } else if (input === 'down') {
    posY -= 10;
    image.setAttribute('style', `background-position-y: ${posY}px;`);
  }
}

let nav = document.querySelector('nav')
nav.addEventListener('click', (event) => {
  //event.currentTarget - az elem amire az event listener megvan hivva (nav)
  //event.target - az elem amire kattintunk (button)
  let action = event.target.getAttribute('data-action'); // move or zoom
  let direction = event.target.getAttribute('data-direction'); // up down left right in out

  if (action === 'zoom') {
    zoom(direction);

  } else if (action === 'move') {
    move(direction);
    console.log(direction);
  }
});
