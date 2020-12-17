'use strict';

let products = {
  'Eggs': 200,
  'Milk': 200,
  'Fish': 400,
  'Apples': 150,
  'Bread': 50,
  'Chicken': 550,
};

//How much is the fish?
console.log('The fish costs: ' + products['Fish']);

//What is the most expensive product?
let mostExpensive: number = 1;
Object.keys(products).forEach((key) => {
  let current: number = products[key];
  if (current > mostExpensive) {
    mostExpensive = current;
  } else {
    console.log('no change');
  }
  console.log('Current: ' + current + ' Most expensive: ' + mostExpensive);
});

//What is the average price?
let averagePrice: number;
let sum2: number = 0;
let counter2: number = 0;

Object.keys(products).forEach((key) => {
  let current2: number = products[key];
  counter2++;
  sum2 += current2;
});

averagePrice = Math.floor(sum2 / counter2);
console.log(`Average price: ${averagePrice}`);

//How many products' price is below 300?
let counter3: number = 0;

Object.keys(products).forEach((key) => {
  let current3: number = products[key];
  if (current3 < 300) {
    counter3++;
    console.log(counter3);
  }
});

console.log(`${counter3} products are cheaper than 300.`);

//Is there anything we can buy for exactly 125?
let is125: boolean = false;

Object.keys(products).forEach((key) => {
  let current4: number = products[key];
  if (current4 === 125) {
    is125 = true;
  }
});

console.log(`Anything for exactly 125: ${is125}`);

//What is the cheapest product?
let cheapest: number = mostExpensive;
let cheapestItem: string = '';

Object.keys(products).forEach(key => {
  let current5: number = products[key];
  if (current5 < cheapest) {
    cheapest = current5;
    cheapestItem = key;
  }
})

console.log(`The cheapest item is ${cheapestItem}, it costs ${cheapest}.`);
