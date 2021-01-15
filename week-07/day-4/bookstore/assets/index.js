'use strict';

window.onload = () => {
  let bookRequest = new XMLHttpRequest();
  bookRequest.open('GET', 'http://localhost:3000/books' );
  bookRequest.send();

  bookRequest.onload = (response) => {
    let resultObject = JSON.parse(response.target.response);
    console.log(resultObject[0].book_name);
    resultObject.forEach(book => {
      const exampleDiv = document.getElementById('example');
      exampleDiv.appendChild(createBookUL(book));
    });
  };
}

const createBookUL = (bookObject) => {
  let currentBook = document.createElement('p');
  currentBook.textContent = bookObject.book_name;
  currentBook.classList.add('book');
  return currentBook;
}
