'use strict';

const express = require ('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    title: '🌍 Hello World 🌍',
    done: `🧟‍♂️ IT'S ALIVE! 🧟‍♂️`,
  });
});

app.listen(3000);