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
Object.keys(products).forEach(key => {
  let current: number = products[key];
  if (current > mostExpensive) {
    mostExpensive = current;
  } else {
    console.log('no change');
  }
  console.log('Current: ' + current + ' Most expensive: ' + mostExpensive);
  })

//What is the average price?
//How many products' price is below 300?
//Is there anything we can buy for exactly 125?
//console.log(`${products['125']}` !== undefined);

//What is the cheapest product?
