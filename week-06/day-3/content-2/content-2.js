'use strict';

// 1) replace the list items' content with items from this list:
// ['apple', 'banana', 'cat', 'dog']
// 2) change the <ul> element's background color to 'limegreen'
//   - use css class to change the color instead of the style property

const array = ['apple', 'banana', 'cat', 'dog'];
const list = document.querySelectorAll('li');

list.forEach((elem, i) => {
  elem.textContent = array[i];
  i++;
});

const ul = document.querySelector('ul');
ul.style.background = 'limegreen';
