'use strict';

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0


function divide10 (x: number): number{
    try {
        if(x === 0) throw 'fail';
    }
    catch(e) {
        console.log('fail');
    }
    return (10 / x);
}

console.log(divide10(0));