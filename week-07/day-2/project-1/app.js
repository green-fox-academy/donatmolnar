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

app.get('/greeter', (req,res) => {
  let name = req.query.name;
  let title = req.query.title;
  if (name === undefined && title === undefined) {
    res.status(400);
    res.json({"error": "Please provide a name and a title!"})
  } else if (name === undefined) {
    res.status(400);
    res.json({"error": "Please provide a name!"});
  } else if (title === undefined) {
    res.status(400);
    res.json({"error": "Please provide a title!"});
  } else {
    res.json({"welcome_message": `Oh, hi there ${name}, my dear ${title}!`});
  }
});

app.listen(3000);
