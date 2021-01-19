'use strict';

// On the click of the button,
// Count the items in the list
// And display the result in the result element.

let list = document.querySelectorAll('li');
let button = document.querySelector('button');
let result = document.querySelector('.result');

let showResult = () => {
  result.innerHTML = list.length;
};

button.addEventListener('click', showResult);
