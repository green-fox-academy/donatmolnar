'use strict';

// 1)  Append every paragraph with the last one's content.
// 2)  Do the same again, but you should keep the cat strong.
const parag = document.querySelectorAll('p');
const animals = document.querySelector('.animals');
const animalsTXT = animals.textContent;
const animalsHTML = animals.innerHTML;

parag.forEach((elem) => {
  elem.textContent += ' ' + animalsTXT;
});

parag.forEach((elem) => {
  elem.innerHTML += ' ' + animalsHTML;
});
