'use strict';

let myFinance: number [] = [500, 1000, 1250, 175, 800, 120];

//sum
let sum = myFinance.reduce((a, b) => a + b, 0)
console.log('Sum: ' + sum);

//max
console.log('Max: ' + Math.max(...myFinance));

//min
console.log('Min: ' + Math.min(...myFinance));

//avg
console.log('Average: ' + sum / myFinance.length);
