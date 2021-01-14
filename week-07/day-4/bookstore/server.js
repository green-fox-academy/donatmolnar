'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');

app.use(express.json());
app.use(express.static('assets'));


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

app.get('/books', (req,res) => {
  //let category = req.query.category;
  //let publisher = req.query.publisher;
  conn.query(
    `SELECT book_name, aut_name, cate_descrip, pub_name, book_price
    FROM book_mast LEFT JOIN author ON book_mast.aut_id = author.aut_id
    LEFT JOIN category ON category.cate_id = book_mast.cate_id
    LEFT JOIN publisher ON publisher.pub_id = book_mast.pub_id;`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).json({error: 'error during reading sql db'})
      return;
    }
    //res.sendFile(path.join(__dirname, '/assets/index.html'));
    res.json(rows);
  });
});

app.listen(3000);
