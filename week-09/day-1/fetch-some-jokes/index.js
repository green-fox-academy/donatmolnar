'use strict';


const container = document.querySelector('#container');
const button = document.querySelector('#trigger');
let newP = document.createElement('p');

button.addEventListener('click', event => {
  event.preventDefault();

  fetch('http://api.icndb.com/jokes/random')
  .then(response => response.json())
  .then(response => newP.innerHTML = response.value.joke);
  container.appendChild(newP);
});

