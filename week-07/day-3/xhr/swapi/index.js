'use strict';

window.onload = () => {
  let searchRequest = new XMLHttpRequest();
  searchRequest.open('Get', 'https://swapi.dev/api/people/');
  searchRequest.send();
  
  searchRequest.onload = (result) => {
    let resultArray = JSON.parse(result.target.response).results;
    let name = resultArray[0].name; //Luke Skywalker
    let films = resultArray[0].films; //example result: http://swapi.dev/api/films/1/
    films.forEach((element) => {
    createList(element);
    }) ;   
  };
};

let createList = (input) => {
  let container = document.querySelector('#results');
  let newListItem = document.createElement('li');
  newListItem.textContent = input;
  container.appendChild(newListItem);
};
