'use strict';

// If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
const pList = document.querySelectorAll('p');

if (pList[3].className == 'dolphin') {
  pList.forEach((elem) => {
    if (elem.className == 'apple') {
      elem.textContent = 'pear';
    }
  });
}

// If the first p has an 'apple' class, replace cat's content with 'dog'
if (pList[0].className == 'apple') {
  pList.forEach((elem) => {
    if (elem.textContent == 'cat') {
      elem.textContent = 'dog';
    }
  });
}

// Make apple red by adding a .red class
pList.forEach((elem) => {
  if (elem.className == 'apple') {
    elem.className += ' red';
  }
});

// Make balloon less balloon-like (change its shape)
pList.forEach((elem) => {
  if (elem.className == 'balloon') {
    elem.style.borderRadius = '5%';
  }
});
