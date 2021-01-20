'use strict';

let scifi = ["Moon", "2001: A Space Odyssey", "Contact"]
let drama = ["Darkest Hour", "There Will Be Blood", "American Beauty"]
let comedy = ["Airplane!", "Deadpool", "Wayne's World"]

let genre = document.getElementById('genre');
let movie = document.getElementById('movie');

genre.addEventListener('change', (event) => {
console.log(event);
});