' use strict';

let name1: string [] = [];
console.log(name1.length);

name1.push('William');
console.log(name1 === []);

name1.push('John', 'Amanda');
console.log(name1.length);
console.log(name1[2]);

for (let i: number = 0; i < name1.length; i++) {
    console.log(name1[i]);
}

for (let i: number = 0; i < name1.length; i++) {
    console.log(i + 1 + '. ' + name1[i]);
}

name1.splice(1, 1);
console.log(name1.reverse());

name1.splice(0, name1.length);
console.log(name1);
