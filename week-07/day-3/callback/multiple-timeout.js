'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

function timeout(fruit, delay) {
  setTimeout(() => {
    console.log(fruit);
  }, delay);
}

console.log('apple');
timeout('pear', 1000);
timeout('melon', 3000);
timeout('grapes', 5000);
