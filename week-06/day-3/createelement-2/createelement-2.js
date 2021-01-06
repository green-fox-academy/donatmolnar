'use strict';

// Remove the king from the list.
const list = document.querySelector('ul.asteroids');
const king = document.querySelector('li');
list.removeChild(king);

// Fill the list based on the following list of objects.
// Only add the asteroids to the list.
// Each list item should have its category as a class and its content as text content.

const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];

planetData.forEach((elem) => {
  if (elem['asteroid'] == true) {
    let newAsteroid = document.createElement('li');
    newAsteroid.className = elem['category'];
    newAsteroid.textContent = elem['content'];
    list.appendChild(newAsteroid);
  }
});
