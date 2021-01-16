'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/translate', (req,res) => {
  let text = req.body.text;
  let vowels = ['a', 'á', 'e', 'é', 'i', 'í', 'o', 'ó', 'ö', 'ő', 'u', 'ú', 'ü', 'ű', 'A', 'Á', 'E', 'É', 'I', 'Í', 'O', 'Ó', 'Ö', 'Ő', 'U', 'Ú', 'Ü', 'Ű'];
  
  vowels.forEach((vowel) => {
    text = text.replace(new RegExp(vowel, 'g' ), `${vowel}v${vowel.toLowerCase()}`);
  });

  res.json({'translated': text});
});

app.listen(3000);
