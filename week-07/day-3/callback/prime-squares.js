'use strict';

// 1: generate 100 divs to the <section> element and add index numbers to it as the element's textContent
// 2: Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is
// 3: Create a timer that keeps calling the prime validatior function until it reaches the end of elements
//  - the timer should fire every 100ms
//  - the timer should stop when there are no more elements left to be colored

const section = document.querySelector('section');

for (let i = 1; i <= 100; i++) {
  let newDiv = document.createElement('div');
  newDiv.textContent = i;
  newDiv.id = i;
  section.appendChild(newDiv);

  if (isPrime(i) === true) {
    newDiv.className = 'prime';
  } else {
    newDiv.className = 'not-prime';
  }
}

function isPrime(num) {
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
  return num > 1;
}

setTimeout(() => {}, 100);
