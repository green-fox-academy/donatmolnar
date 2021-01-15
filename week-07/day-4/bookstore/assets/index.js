'use strict';

window.onload = () => {
  let bookRequest = new XMLHttpRequest();
  bookRequest.open('GET', 'http://localhost:3000/books');
  bookRequest.send();

  bookRequest.onload = (element) => {
    let resultObject = JSON.parse(element.target.response);
    console.log(resultObject[0]);
    resultObject.forEach((book) => {
      const table = document.getElementById('table1');
      table.appendChild(createBookRow(book));
    });
  };
};

// creates a row for the table
const createBookRow = (bookObject) => {
  let createdRow = document.createElement('tr');

  // creates data/cells for the row
  let currentBook = document.createElement('td');
  let currentAuthor = document.createElement('td');
  let currentCategory = document.createElement('td');
  let currentPublisher = document.createElement('td');
  let currentPrice = document.createElement('td');

  currentBook.textContent = bookObject.book_name;
  currentAuthor.textContent = bookObject.aut_name;
  currentCategory.textContent = bookObject.cate_descrip;
  currentPublisher.textContent = bookObject.pub_name;
  currentPrice.textContent = bookObject.book_price;

  // adds the data/cells to the row
  createdRow.appendChild(currentBook);
  createdRow.appendChild(currentAuthor);
  createdRow.appendChild(currentCategory);
  createdRow.appendChild(currentPublisher);
  createdRow.appendChild(currentPrice);
  return createdRow;
};
