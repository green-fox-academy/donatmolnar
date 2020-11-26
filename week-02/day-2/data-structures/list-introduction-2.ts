'use strict';

let listA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];

let listB: string[] = [];

for (let i: number = 0; i < listA.length; i++) {
  listB.push(listA[i]);
}

console.log(listB);

//print: listA contains Durian or not
//console.log(listA.includes('Durian'));

//remove Durian from listB

//delete based on position
//listB.splice(3, 1);

//delete based on value
for (let i: number = 0; i < listB.length; i++) {
  if (listB[i] === 'Durian') {
    listB.splice(i, 1);
  }
}
console.log(listB);

//add Kiwifruit to listA after the 4th element
listA.splice(4, 0, 'Kiwi fruit');
console.log(listA);

//compare the size of listA and listB
if (listA.length < listB.length) {
  console.log('ListB has has more items.');
} else if (listA.length > listB.length) {
  console.log('ListA has more items.');
} else {
  console.log('ListA and ListB has the same amount of items.');
}

//index of Avocado from listA
console.log(listA.indexOf('Avocado'));

//index of Durian from listB
console.log(listB.indexOf('Durian'));

//add Passion Fruit and Pomelo to listB in a single statement
listB.splice(0, 0, 'Passion Fruit', 'Pomelo');

//print out the 3rd element of listA
console.log(listA[2]);
