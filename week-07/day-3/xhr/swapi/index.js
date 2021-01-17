'use strict';

window.onload = () => {
  let searchRequest = new XMLHttpRequest();
  searchRequest.open('Get', 'https://swapi.dev/api/people');
  searchRequest.send();
  
  searchRequest.onload = (result) => {
    console.log(result);

  }
}

let createList = (input) => {
  let container = document.getElementById('results');
  let newListItem = document.createElement('li');
  newListItem.textContent = input;
  container.push(newListItem);
};
