'use strict';

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('assets'));

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/doubling', (req,res) => {
  let received = req.query.input;
  if (received === undefined) {
    res.json({ "error": "Please provide an input!"});
  } else {
    let result = received * 2;
    res.json({'received': Number(received), 'result': result});
  }
});

app.listen(3000);
