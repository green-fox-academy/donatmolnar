'use strict';

window.onload = () => {
  let songRequest = new XMLHttpRequest();
  songRequest.open('GET', 'http://localhost:3000/songs' );
  songRequest.send();

  songRequest.onload = (response) => {
    let resultObject = JSON.parse(response.target.response);
    console.log(resultObject);
    resultObject.forEach(song => {
    document.getElementById('mainContainer').appendChild(createSongIframe(song));
    });
  };
}

const createSongIframe = (songObject) => {
  let currentIframe = document.createElement('iframe');
  currentIframe.width = 320;
  currentIframe.height = 180;
  currentIframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
  currentIframe.src = songObject.url;
  currentIframe.classList.add('video');
  return currentIframe;
}
