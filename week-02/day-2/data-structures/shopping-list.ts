'use stict';

let shoppingList: string[] = [
  'eggs',
  'milk',
  'fish',
  'apples',
  'bread',
  'chicken',
];

//includes() még nem megy
console.log(
  'Do we have milk on the list: ' + (shoppingList.indexOf('milk') !== -1)
);
console.log(
  'Do we have banana on the list: ' + (shoppingList.indexOf('banana') !== -1)
);
