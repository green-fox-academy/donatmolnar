'use strict';

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static('assets'));
app.use(bodyParser.json());

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

app.get('/appenda/:appendable', (req,res) => {
  let appended = req.params.appendable + 'a';
  res.json({'appended': `${appended}`})
});

app.post('/dountil/:action', (req,res) => {
  let action = req.params.action;
  let number = req.body.until;

  if (number == undefined) {
    res.json({"error": "Please provide a number!"})
  } else {  
    if (action == 'sum') {
      function sum(input) {
        let sum = 0;
        for (let i = 0; i <= input; i++) {
          sum += i;
        }
        return sum;
      }
      res.json({'result': Number(sum(number))});
      
    } else if (action == 'factor') {
      function factor(input) {
        let facto = 1;
        for (let i = 1; i <= input; i++) {
          facto *= i;
        }
        return facto;
      }
      res.json({'result': Number(factor(number))});
    }
  }
});

app.listen(3000);
