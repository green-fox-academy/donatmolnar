'use strict';

let promise = new Promise(function (fulfill, reject) {
  setTimeout(() => {
    reject(new Error('REJECTED!'))
  }, 300)
})
.then(undefined, (error) => onReject(error));

function onReject(error) {
  console.log(error.message);
}
