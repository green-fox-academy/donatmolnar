'use strict';

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for reading the html form

app.post('/signup', (req, res) => {
  let username = req.body.username;
  let email = req.body.email;
  res.send(`<h1>Thanks ${username}, we will send updates to ${email}.</h1>`);
});

app.listen(3000);