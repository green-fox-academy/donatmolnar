'use strict';

// Write the image's url to the console.
const imgElement = document.querySelector('img');
console.log(imgElement.src);

// Replace the image with a picture of your favorite animal.
imgElement.src ='https://cdn.unifiedcommerce.com/content/product/large/796780214837.jpg';
imgElement.height = 200;

// Make the link point to the Green Fox Academy website.
const urlElement = document.querySelector('a');
urlElement.href = 'https://www.greenfoxacademy.com';

// Disable the second button.
const button = document.querySelector('.this-one');
button.disabled = true;

// Replace its text with 'Don't click me!'.
button.textContent = `Don't click me!`;
console.log(button);
