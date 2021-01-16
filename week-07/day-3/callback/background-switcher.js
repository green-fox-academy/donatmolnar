'use strict';

// 1: Create a function that updates the <body> elements background-image's css property
// 2: The image value should be https://loremflickr.com/g/1280/800/hungary/
// 3: Make sure every time you refresh the image, you add a cachebuster
// 4: Create a timer function that refreshes the background every 5 seconds

const body = document.querySelector('body');

let setImage = () => {
  body.setAttribute('style', `background-image: url('https://loremflickr.com/g/1280/800/hungary/');`);
};

setImage();

let timer = setInterval(() => {
  setImage();
}, 2000);
