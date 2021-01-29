'use strict';

window.onload = () => {
  let searchRequest = new XMLHttpRequest();
  searchRequest.open('GET', 'https://swapi.dev/api/people/');
  searchRequest.send();

  let button = document.querySelector('button');
  let inputField = document.querySelector('input');

  searchRequest.onload = (result) => {
    
    button.addEventListener('click', (event) => {
      event.preventDefault();
      let input = inputField.value; 
      
      let resultArray = JSON.parse(result.target.response).results;
      let name = resultArray.filter(element => element.name === input);
      let index = resultArray.indexOf(name[0]);
      let films = resultArray[index].films; //example result: http://swapi.dev/api/films/1/
      films.forEach((element) => {
        
        let titleRequest = new XMLHttpRequest();
        titleRequest.open('GET', element);
        titleRequest.send();
        
        titleRequest.onload = (result) => {
          let titleArray = JSON.parse(result.target.response).title;
          console.log(titleArray);
          createList(titleArray);
        };
      })
      inputField.value = '';
  });   
  };
};

let createList = (input) => {
  let container = document.querySelector('#results');
  let newListItem = document.createElement('li');
  newListItem.textContent = input;
  container.appendChild(newListItem);
};
