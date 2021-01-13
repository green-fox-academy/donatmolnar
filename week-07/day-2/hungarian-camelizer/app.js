'use strict';

const express = require('express');
const app = express();
//const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/translate', (req,res) => {
  let text = req.body.text;
  let vowel = [a, á, e, é, i, í, o, ó, ö, ő, u, ú, ü, ű];
/*
  for (let i = 0; i < vowel.length; i++) {
    text.replace(vowel[i], vowel[i] + 'v' + vowel[i]);
  }
*/
  res.json({'translated': text});
});

app.listen(3000);
