'use strict';

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/arrays', (req, res) => {
  let action = req.body.what;
  let numberList = req.body.numbers;

  if (action === undefined || numberList === undefined) {
    res.json({'error': 'Please provide what to do with the numbers!' });
  } else if (action === 'sum') {
    let sum = 0;
    numberList.forEach((num) => {
      sum += num;
    });
    res.json({'result': sum });
  } else if (action === 'multiply') {
    let result = 1;
    numberList.forEach((num) => {
      result *= num;
    });
    res.json({'result': result });
  } else if (action === 'double') {
    let newNumberList = [];
    numberList.forEach((num) => {
      newNumberList.push(num * 2);
    });
    res.json({'result': newNumberList});
  }
});

app.listen(3000);
