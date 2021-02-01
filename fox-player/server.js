'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(express.json());
app.use(express.static('public'));

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'foxplayer',
  insecureAuth: 'true',  
});

// connects to mysq
conn.connect((err) => {
  if (err) throw err;
  console.log('Connected to mysql');
});

// sends the landingpage
app.get('/', (req,res) => {
  res.status(200).sendFile('index.html');
});

