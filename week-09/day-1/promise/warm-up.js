'use strict';

let callback = () => {
  console.log('TIMED OUT!');
};

setTimeout(callback, 300);