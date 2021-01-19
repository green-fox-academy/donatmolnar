'use strict';

let button = document.querySelector('button');
let h3 = document.querySelector('h3');
let counter = 0;

window.onload = () => {
  setTimeout(() => {
    button.onclick = () => {
      counter++;
      if (counter >= 3) {
        h3.textContent = `5 seconds ellapsed and clicked ${counter} times`;
      };
    };
  }, 5000);
};
