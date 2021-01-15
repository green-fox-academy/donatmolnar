'use strict';

// Create a timeout that will set the display to "Bomb exploded" in 10 seconds
// If you click on the button set the display to "Bomb defused" and stop the timeout
// Extra: create an interval which will update the remaining seconds in the display

let display = document.querySelector('.display');
let intervalUnit = 1000;

const explode = () => {
  display.innerHTML = '💥 Bomb exploded 💥';
  button.disabled = true;
};

const defuse = () => {
  display.innerHTML = '☮️ Bomb defused ☮️';
};

let button = document.querySelector('button');
button.onclick = () => {
  clearInterval(timer);
  defuse();
};

let timer = setInterval(() => {
  display.innerHTML = Number(display.innerHTML) - 1;
  if (Number(display.innerHTML) <= 0) {
    clearInterval(timer);
    explode();
  }
}, intervalUnit);
