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

// set default image, title and subtitle
let selected = 0;
setAll(selected);

//next button
const next = document.getElementById('next');
next.onclick = () => {
  if (selected < images.length -1) {
    selected++;
  } else {
    selected = 0;
  }
  setAll(selected);
};

//prev button
const prev = document.getElementById('prev');
prev.onclick = () => {
  if (selected > 0) {
    selected--;
  } else {
    selected = images.length - 1;
  }
  setAll(selected);
};

// adds the thumbnails
const thumb = document.getElementById('thumb');

images.forEach((element) => {
  let item = document.createElement('img');
  item.src = element.src;
  item.title = element.title;
  item.className = "thumbItem";
  thumb.appendChild(item);
});

// sets the image
function setImage(selected) {
  const player = document.getElementById('player');
  player.setAttribute(`style`, `background-image: url(${images[selected].src});`);
}

// sets the title
function setTitle(selected) {
  const title = document.getElementById('title');
  title.textContent = `${images[selected].title}`;
}

// sets the subtitle
function setSub(selected) {
  const subtitle = document.getElementById('subtitle');
  subtitle.innerHTML = `${images[selected].sub}`;
}

// sets selected image, title and subtitle
function setAll(selected) {
  setImage(selected);
  setTitle(selected);
  setSub(selected);
}

