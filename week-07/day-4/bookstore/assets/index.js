'use strict';

const xhr = new XMLHttpRequest();

const getData = () => {
  xhr.open('GET', '/books');
  xhr.responseType = 'json';
  
  xhr.onload = () => {
    if(this.status == 200) {
      let data = JSON.parse(xhr.response);
      console.log(data);
    } else {
      console.log('Err');
    }
  }
  xhr.send();
}
