'use strict';

//NOT WORKING YET - PLEASE COME BACK LATER

// Things are a little bit messed up
// Your job is to decode the notSoCrypticMessage by using the hashmap as a look up table
// Assemble the fragments into the out variable

let out: string = '';
let notSoCrypticMessage: number[] = [1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11];

let hashmap = {
  7: 'run around and desert you',
  50: 'tell a lie and hurt you ',
  49: 'make you cry, ',
  2: 'let you down',
  12: 'give you up, ',
  1: 'Never gonna ',
  11: '\n',
  3: 'say goodbye '
};


out += Object.keys(hashmap).forEach(key => {
  console.log(hashmap[key]);
})


function mapOrder(object: any, order: number[], key: string) {
  object.sort((a: number, b: number) => {
    let A = a[key];
    let B = b[key];
    return order.indexOf(A) > order.indexOf(B) ? 1 : -1;
  });
  return object;
};


console.log(mapOrder(hashmap, notSoCrypticMessage, Object.keys(hashmap[key])));

//ordered_array = item_array.mapOrder(item_array, item_order, 'id');

/*
Find the values of key in an object:
Object.keys(pistike1).forEach(key => {
 console.log(pistike1[key])
}) 
*/

//It sorts numbered arrays 
//console.log(notSoCrypticMessage.sort((a, b) => a - b));

console.log(out)