'use strict';

// Create an event listener which logs the current timestamp to the console once the button is clicked.
// When the button is clicked for the second or any other times no event listener should be called.
// Try to solve this two different ways.
// hint: take a look at the button attributes https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button

let button = document.querySelector('button');

//solution 1
let logTime = () => {
  let timestamp = new Date(Date.now());
  console.log(timestamp);
  button.disabled = true;
};

button.addEventListener('click', logTime);

//solution 2
button.onclick = () => {
  let timestamp2 = +new Date();
  console.log(new Date(timestamp2));
  button.setAttribute('disabled', 'true');
};
