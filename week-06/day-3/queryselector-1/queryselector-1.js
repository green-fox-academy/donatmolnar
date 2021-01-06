'use strict';

//1. store the element that says 'The King' in the 'king' variable.
//console.log it.
const kingElement = document.getElementById('b325');
console.log(kingElement);

//2. store 'The Businessman' and 'The Lamplighter' in the 'businessLamp' variable.
//console.log each of them.
const businessman = document.querySelector('.big').textContent;
const lamplighter = document.querySelector('.b329').textContent;
const businessLamp = [];

businessLamp.push(businessman, lamplighter);

businessLamp.forEach((elem) => {
  console.log(elem);
});

//3. store 'The King' and 'The Conceited Man' in the 'conceitedKing' variable.
//alert them one by one.
const conceitedKing = [];
const conceitedMan = document.querySelector('.b326').textContent;
const king = kingElement.textContent;

conceitedKing.push(king, conceitedMan);

console.log(conceitedKing);
conceitedKing.forEach((elem) => {
  alert(elem);
});

//4. store 'The King', 'The Conceited Man' and 'The Lamplighter' in the 'noBusiness' variable.
//console.log each of them.
const noBusiness = [];

noBusiness.push(king, conceitedMan, lamplighter);

noBusiness.forEach((elem) => {
  console.log(elem);
});
