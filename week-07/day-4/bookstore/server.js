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
  if (err) throw err;
  console.log('Connected to mysql');
});

app.get('/', (req,res) => {
  res.json({Status: "Connection established: postman has been reached by the server"});
});

app.get('/titles', (req,res) => {
  conn.query('SELECT * FROM book_mast;', (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).json({error: 'error during reading sql db'})
      return;
    }
    let titles = [];
    rows.forEach((element) => {
      titles.push(element.book_name);
    });
    res.json({titles});
  });
});


app.listen(3000);
