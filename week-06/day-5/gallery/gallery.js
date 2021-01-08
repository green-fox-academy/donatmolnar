'use strict';

const images = [
  {
    title: 'Space-1',
    sub: 'General description of the image above',
    src: './src/space-1.jpg'
  },
  {
    title: 'Space-2',
    sub: 'General description of the image above',
    src: './src/space-2.jpg',
  },
  {
    title: 'Space-3',
    sub: 'General description of the image above',
    src: './src/space-3.jpg',
  },
  {
    title: 'Space-4',
    sub: 'General description of the image above',
    src: './src/space-4.png',
  },
  {
    title: 'Space-5',
    sub: 'General description of the image above',
    src: './src/space-5.jpg',
  },
  {
    title: 'Space-6',
    sub: 'General description of the image above',
    src: './src/space-6.jpg',
  },
  {
    title: 'Space-7',
    sub: 'General description of the image above',
    src: './src/space-7.jpg',
  },
  {
    title: 'Space-8',
    sub: 'General description of the image above',
    src: './src/space-8.png'
  },
]

// adds the thumbnails
const thumb = document.getElementById('thumb');

images.forEach((element) => {
  let item = document.createElement('img');
  item.src = element.src;
  item.title = element.title;
  item.className = "thumbItem";
  thumb.appendChild(item);
});

// sets the default image
let selected = images[1];
const player = document.getElementById('player');
player.setAttribute(`style`, `background-image: url(${selected.src});`);

// sets the title
const title = document.getElementById('title');
title.textContent = `${selected.title}`;

//sets the subtitle
const subtitle = document.getElementById('subtitle');
subtitle.innerHTML = `${selected.sub}`;

