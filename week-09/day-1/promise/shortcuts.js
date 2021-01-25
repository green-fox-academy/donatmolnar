'use strict';

let promise =  Promise.resolve('SECRET VALUE')
.catch((error) => {console.log(error)});

promise.reject(new Error('THIS ONE RAN INTO AN ERROR'));