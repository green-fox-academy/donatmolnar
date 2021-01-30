'use strict';

import { humanized_time_span } from './timer.js';

window.onload = () => {
  const posts = document.querySelector('#posts')
  
  fetch('/posts')
  .then(res => res.json())
  .then(res => 
    res.forEach(element => {
      posts.appendChild(createPost(element))
    }));
};


posts.addEventListener('click', (event) => {
  let dataId = event.target.getAttribute('data-id');
  let action = event.target.getAttribute('class');
  let counter = document.querySelector(`[data-id="${dataId}"] ~ .score`);
  console.log(dataId);
  console.log(action);


  if (action === 'up') {
    //counter.textContent++;

    fetch(`http://localhost:3000/posts/${dataId}/upvote`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({id: `${dataId}`})
    })
    .then(res => res.json())
    .then(res => counter.textContent = res[0].score);

  } else if (action === 'down') {
    //counter.textContent--;

    fetch(`http://localhost:3000/posts/${dataId}/downvote`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({id: `${dataId}`})
    })
    .then(res => res.json())
    .then(res => counter.textContent = res[0].score);

  } else if (action === 'remove') {

  } else if (action === 'modify') {

  }

});


const newButton = document.querySelector('#new')

newButton.addEventListener('click', () =>{
  window.location.assign(`http://localhost:3000/add`);
})

let createPost = (postObject) => {

  // creates the post elements
  let post = document.createElement('div');
  post.className = 'post';
  post.setAttribute('id', `${postObject.post_id}`);
  //post.setAttribute(`onclick`, `window.location.href='${postObject.url}'`);

  let counter = document.createElement('div');
  counter.className = 'counter';

  let up = document.createElement('button');
  up.className = 'up';
  //up.setAttribute(`onclick`, `${postObject.post_id}`);
  up.setAttribute(`data-id`, `${postObject.post_id}`);


  let score = document.createElement('p');
  score.className = 'score';
  score.textContent = postObject.score;
  score.setAttribute(`data-id`, `${postObject.post_id}`);


  let down = document.createElement('button');
  down.className = 'down';
  down.setAttribute(`data-id`, `${postObject.post_id}`);


  let content = document.createElement('div');
  content.className = 'content';

  let title = document.createElement('h2');
  title.className = 'title';
  title.textContent = postObject.title;
  
  let subtitle = document.createElement('p');
  subtitle.className = 'subtitle';
  subtitle.textContent = `Submitted ${humanized_time_span(postObject.timestamp)} by ${postObject.owner}`;

  let modify = document.createElement('button');
  modify.className = 'modify';
  modify.textContent = 'modify';
  modify.setAttribute(`data-id`, `${postObject.post_id}`);


  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'remove';
  remove.setAttribute(`data-id`, `${postObject.post_id}`);


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
};
