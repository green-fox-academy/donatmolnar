'use strict';

// 1, Build up the necessary structure with JavaScript (try to use semantically correct elements)
// 2, Achive the same design by css
// 3, Try not to use css classes
// 4, Add some functionality to the buttons
//     - If "Up" is clicked the selection should move up by one
//     - If "Down" is clicked the selection should move down by one
//     - If "X" is clicked the selected item should be removed and the first item should be selected
//     - If ">" is clicked the selected item should be moved to the right side and the first item on the left side should be selected
// 5, Check all the edge cases, no error should be printed to the console

// grabs the body element
const body = document.querySelector('body');

// creates the list element and add it to the body element
const list = document.createElement('ul');
list.id = 'list';
body.appendChild(list);

// adds items to the list
let shoppingList = ['bread', 'milk', 'orange', 'tomato'];

shoppingList.forEach((element) => {
  let item = document.createElement('li');
  item.textContent = element;
  item.className = element;
  list.appendChild(item);
});

// creates the list element for buttons
const buttons = document.createElement('ul');
buttons.id = 'buttons';
body.appendChild(buttons);

// adds button elements to the button list
let buttonList = ['Up', 'Move', 'X', 'Down'];

buttonList.forEach((element) => {
  let item = document.createElement('button');
  item.textContent = element;
  item.id = element;
  buttons.appendChild(item);
});

 
// creates selected list element
const selected = document.createElement('ul');
selected.id = 'selected';
body.appendChild(selected);

// selection handling


// onclick functions
const up = document.getElementById('Up')
up.onclick = () => {
 alert('selection up');
};

const down = document.getElementById('Down')
down.onclick = () => {
 alert('selection down');
};

const move = document.getElementById('Move')
move.onclick = () => {
 alert('selection Move');
};

const remove = document.getElementById('X')
remove.onclick = () => {
 alert('selection Remove');
};


