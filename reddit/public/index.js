'use strict';

import * as timer from './timer';

window.onload = () => {
  const posts = document.querySelector('#posts')
  
  fetch('/posts')
  .then(response => response.json())
  .then(response => 
    response.forEach(element => {
      posts.appendChild(createPost(element))
    }));

};

let createPost = (postObject) => {

  // creates the post elements
  let post = document.createElement('div');
  post.className = 'post';

  let counter = document.createElement('div');
  counter.className = 'counter';

  let up = document.createElement('button');
  up.className = 'up';

  let score = document.createElement('p');
  score.className = 'score';
  score.textContent = postObject.score;

  let down = document.createElement('button');
  down.className = 'down';

  let content = document.createElement('div');
  content.className = 'content';

  let title = document.createElement('h2');
  title.className = 'title';
  title.textContent = postObject.title;
  
  let subtitle = document.createElement('p');
  subtitle.className = 'subtitle';
  subtitle.textContent = `Submitted ${timer.humanized_time_span(postObject.timestamp)} by ${postObject.owner}`;

  let modify = document.createElement('button');
  modify.className = 'modify';
  modify.textContent = 'modify';

  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'remove';

  // builds up the post from the elements
  counter.appendChild(up);
  counter.appendChild(score);
  counter.appendChild(down);

  content.appendChild(title);
  content.appendChild(subtitle);
  content.appendChild(modify);
  content.appendChild(remove);

  post.appendChild(counter);
  post.appendChild(content);

  return post;
}