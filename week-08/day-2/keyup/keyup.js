'use strict';

// 1) Subscibe to keyup events on the global window object
// 2) Console log the event object and peek inside
// 3) Display the last pressed key's code as "Last pressed key code is: __"
    
let h1 = document.querySelector('h1');

const display = (event) => {
  h1.innerHTML = `Last pressed key is: ${event.key}`;
};

let windowEvent = window.addEventListener('keyup', display);
