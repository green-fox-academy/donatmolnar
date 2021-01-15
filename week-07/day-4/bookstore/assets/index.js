'use strict';

window.onload = () => {
  let bookRequest = new XMLHttpRequest();
  bookRequest.open('GET', 'http://localhost:3000/books' );
  bookRequest.send();

  bookRequest.onload = (element) => {
    let resultObject = JSON.parse(element.target.response);
    resultObject.forEach(book => {
      const table = document.getElementById('table1');
      table.appendChild(createBookRow(book));
    });
  };
}

const createBookRow = (bookObject) => {
  let createdRow = document.createElement('tr');
  let currentBook = document.createElement('td');
  currentBook.textContent = bookObject.book_name;
  createdRow.appendChild(currentBook);
  return createdRow;
}
