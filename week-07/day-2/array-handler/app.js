'use strict';

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const { userInfo } = require('os');

app.use(bodyParser.json());

app.post('/arrays', (req,res) => {
  let action = req.body.what;
  let numberList = req.body.numbers;

  if (action === undefined || numberList === undefined) {
    res.json({"error": "Please provide what to do with the numbers!"})
  }
  if (action = 'sum') {

  } else if (action = 'multiply') {

  } else if (action = 'double') {

  }
});

app.listen(3000);