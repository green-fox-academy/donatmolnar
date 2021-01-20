'use strict';

let genre = document.getElementById('genre');
let movie = document.getElementById('movie');
let selectedP = document.getElementById('selected-movie');
let scifi = document.querySelectorAll('.sci-fi');
let drama = document.querySelectorAll('.drama');
let comedy = document.querySelectorAll('.comedy');

genre.addEventListener('change', (event) => {
  let selectedGenre = event.target.value;

  for (let i = 0; i < movie.length; i++) {
    if (selectedGenre == 'select-genre') {
      movie[i].hidden = '';
    } else if (movie[i].className == selectedGenre) {
      movie[i].hidden = '';
    } else {
      movie[i].hidden = 'true';
    }
  }
});

movie.addEventListener('change', (e) => {
  if (e.target.value === 'Select a movie') {
    selectedP.textContent = `Please select a movie.`;
  } else {
    selectedP.textContent = `Your selected movie is ${e.target.value}.`;
  }
});
