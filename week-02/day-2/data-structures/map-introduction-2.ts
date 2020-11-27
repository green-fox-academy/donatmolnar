'use strict';

let books = {
  '978-1-60309-452-8': 'A Letter to Jo',
  '978-1-60309-459-7': 'Lupus',
  '978-1-60309-444-3': 'Red Panda and Moon Bear',
  '978-1-60309-461-0': 'The Lab',
};

//print key value pairs: e.g.: A Letter to Jo (ISBN: 978-1-60309-452-8)
for (let property in books) {
    console.log(`${books[property]} (ISBN: ${property})`);
  }

//remove the key-value pair with key 978-1-60309-444-3
delete books['978-1-60309-444-3'];

//remove the key-value pair with value The Lab


//add key-value pairs
books['978-1-60309-450-4'] = 'They Called Us Enemy';
books['978-1-60309-453-5'] = 'Why Did We Trust Him?';

//Print whether there is an associated value with key 478-0-61159-424-8 or not

//Print the value associated with key 978-1-60309-453-5
console.log(`${books['978-1-60309-453-5']}`);
