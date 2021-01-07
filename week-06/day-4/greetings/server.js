'use strict';

const express = require ('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
  let name = req.query.name;
  if (name == undefined) {
    res.render('home', {name: 'Guest'});
  } else {
    res.render('home', {name: name});
  }
});

app.listen(3000);