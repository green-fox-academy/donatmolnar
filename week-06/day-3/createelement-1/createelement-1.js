'use strict';

// Add an item that says 'The Green Fox' to the asteroid list.
const asteroidList = document.querySelector('ul.asteroids');

const newAsteroid = document.createElement('li');
newAsteroid.textContent = 'The Green Fox';
asteroidList.appendChild(newAsteroid);

// Add an item that says 'The Lamplighter' to the asteroid list.
const newAsteroid2 = document.createElement('li');
newAsteroid2.textContent = 'The Lamplighter';
asteroidList.appendChild(newAsteroid2);

// Add a heading saying 'I can add elements to the DOM!' to the .container.
const container = document.querySelector('.container');
const newH2 = document.createElement('h2');
newH2.textContent = 'I can add elements to the DOM!';
container.appendChild(newH2);

// Add an image, any image, to the container.
const newImg = document.createElement('img');
newImg.src = 'https://i.imgflip.com/1aj7h4.jpg?a447000';
newImg.height = 300;
container.appendChild(newImg);
