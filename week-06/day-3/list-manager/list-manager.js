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
  item.id = element;
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
const createSelectedList = document.createElement('ul');
createSelectedList.id = 'selected';
body.appendChild(createSelectedList);
const selectedList = document.getElementById(`selected`);

// selection handling

function activate(item) {
  if (shoppingList[item] === null || shoppingList[item] === undefined) {
    alert('List has been eptied.');
  } else {
    let act = document.getElementById(`${shoppingList[item]}`);
    act.setAttribute('class', 'active');
  }
}

function deactivate(item) {
  if (shoppingList[item] === null || shoppingList[item] === undefined) {
    alert('List has been emptied.');
  } else {
    let deact = document.getElementById(`${shoppingList[item]}`);
    deact.setAttribute('class', '');
  }
}

let active = 0;
activate(active);

// onclick functions
const up = document.getElementById('Up');
up.onclick = () => {
  if (active == 0) {
    deactivate(0);
    active = shoppingList.length - 1;
    activate(active);
  } else {
    deactivate(active);
    active--;
    activate(active);
  }
};

const down = document.getElementById('Down');
down.onclick = () => {
  if (active == shoppingList.length - 1) {
    deactivate(active);
    active = 0;
    activate(active);
  } else {
    deactivate(active);
    active++;
    activate(active);
  }
};

const move = document.getElementById('Move');
move.onclick = () => {
  let act = document.getElementsByClassName('active');
  let item = document.createElement('li');
  item.textContent = act[0].textContent;
  item.id = act[0].id;
  selectedList.appendChild(item);
  shoppingList.splice(shoppingList.indexOf(act[0].id), 1);
  list.removeChild(act[0]);
  activate(0);
};

const remove = document.getElementById('X');
remove.onclick = () => {
  let act = document.getElementsByClassName('active');
  shoppingList.splice(shoppingList.indexOf(act[0].id), 1);
  list.removeChild(act[0]);
  activate(0);
};
