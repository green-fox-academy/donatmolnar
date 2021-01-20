'use strict';

const express = require('express')
const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/signup', (req, res) => {
  console.log(req.body)
  res.json(req.body)
})