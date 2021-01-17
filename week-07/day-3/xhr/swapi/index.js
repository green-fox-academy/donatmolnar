'use strict';

window.onload = () => {
  let searchRequest = new XMLHttpRequest();
  searchRequest.open('Get', 'https://swapi.dev/api/people');
  searchRequest.send();
  
  searchRequest.onload = () => {

  }
}
