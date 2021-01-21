'use strict';

let dog = document.getElementById('dog');
let cat = document.getElementById('cat');
let viktor = document.getElementById('viktor');
let yes = document.getElementById('yes');
let no = document.getElementById('no');
let loveCats = document.getElementById('love-cats');
let signup = document.getElementById('sign-up');

dog.addEventListener('change', () => {
  if (dog.checked === true) {
    signup.disabled = false;
  }
});

cat.addEventListener('change', () => {
  if (cat.checked === true) {
    signup.disabled = false;
  }
});

viktor.addEventListener('change', () => {
  if (viktor.checked === true) {
    signup.disabled = true;
  }
});

yes.addEventListener('change', () => {
  if (yes.checked === true) {
    loveCats.disabled = false;
  }
});

no.addEventListener('change', () => {
  if (no.checked === true) {
    loveCats.disabled = true;
    signup.disabled = false;
  }
});

loveCats.addEventListener('click', () => {
    alert(`Thank you, you've successfully signed up for cat facts.`);
});

signup.addEventListener('click', () => {
  if (viktor.checked === true && no.checked === true) {
    alert(`Sigh, we still added you to the cat facts list.`);
  } else {
    alert(`Thank you, you've successfully signed up for cat facts.`);
  }
});
