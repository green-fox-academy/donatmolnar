'use strict';

const express = require('express')
const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/signup', (req, res) => {
  let username = req.body.username;
  let email = req.body.email;
  res.send(`<h1>Thanks ${username}, we will send updates to ${email}.</h1>`);
});

app.listen(3000);