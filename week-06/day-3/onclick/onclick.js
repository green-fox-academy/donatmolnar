'use strict';

// Turn the party on and off by clicking the button. (the whole page)

const button = document.querySelector('button');
const body = document.querySelector('body');

button.onclick = () => {
  if (body.className == '') {
    body.className = 'party';
  } else {
    body.className = '';
  }
};
