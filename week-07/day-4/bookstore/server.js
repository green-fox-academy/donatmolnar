'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(express.json());

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookstore'
});

conn.connect((err) => {
  if (err) trhow (err);
  console.log('Connected to mysql');
});

