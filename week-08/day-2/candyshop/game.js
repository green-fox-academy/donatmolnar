'use strict';

// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

let candies = document.querySelector('.candies');
let lollypops = document.querySelector('.lollypops');
let createCandies = document.querySelector('.create-candies');
let buyLollypops = document.querySelector('.buy-lollypops');
let candyMachine = document.querySelector('.candy-machine');
let speed = document.querySelector('.speed');

let candyStep = 1;
let candyCount = 0;

createCandies.addEventListener('click', () => {
  candyCount += candyStep;
  candies.textContent = candyCount;
});

buyLollypops.addEventListener('click', () => {
  if (candies.textContent >= 10) {
    candies.textContent -= 10;
    lollypops.textContent = lollypops.textContent + '🍭';
  } else {
    alert(`You don't have enough candies yet. Create candies to buy lollypops. 
    10 candies = 1 lollypop`);
  }
});

candyMachine.addEventListener('click', () => {
  candyStep *= 10;
});
