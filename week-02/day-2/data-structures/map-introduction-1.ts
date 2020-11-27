'use strict';

let myMap = {};

console.log(Object.keys(myMap).length === 0);

myMap['97'] = 'a';
myMap['98'] = 'b';
myMap['99'] = 'c';
myMap['65'] = 'A';
myMap['66'] = 'B';
myMap['67'] = 'C';

//print the keys
console.log(Object.keys(myMap));

//print the values
Object.keys(myMap).forEach((key) => {
  console.log(myMap[key]);
});

//add D with key 68
myMap['68'] = 'D';

//print the number of key-value pairs
console.log(Object.keys(myMap).length);

//print the value of key 99
console.log(myMap['99']);

//remove key-value pair with key 97
delete myMap['97'];
console.log(myMap);


//print boolean: is key 100 is exist?
console.log(myMap['100'] !== undefined);

//remove all key-value pairs
myMap = {};
console.log(myMap);
