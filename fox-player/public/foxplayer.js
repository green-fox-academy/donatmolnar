'use strict';

const addPlaylist = document.querySelector('#newplaylist');

addPlaylist.addEventListener('click', () => {
  let promptInput = window.prompt('Give your playlist a name!', 'My Jam');
  console.log(promptInput);
});


const remove = document.querySelector('.remove')
remove.addEventListener('click', () => {
  if (window.confirm('Are you sure you want to remove this playlist permanently?')) {
    console.log('confirmed');
  } else {
    console.log('cancelled');
  }
});

