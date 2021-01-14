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

let category = '';
let publisher ='';
let plt = 0;
let pgt = 0;

app.get('/books', (req,res) => {
  if (req.query.category === undefined) {
    category = '%';
  } else {
    category = `%${req.query.category}%`;
  }

  if (req.query.publisher === undefined) {
    publisher = '%';
  } else {
    publisher = `%${req.query.publisher}%`;
  }

  if (req.query.plt === undefined || req.query.pgt === NaN) {
    plt = 999999999;
  } else {
    plt = req.query.plt;
  }

  if (req.query.pgt === undefined || req.query.pgt === NaN) {
    pgt = 0;
  } else {
    pgt = req.query.pgt;
  }

  conn.query(
    `SELECT book_name, aut_name, cate_descrip, pub_name, book_price
    FROM book_mast LEFT JOIN author ON book_mast.aut_id = author.aut_id
    LEFT JOIN category ON category.cate_id = book_mast.cate_id
    LEFT JOIN publisher ON publisher.pub_id = book_mast.pub_id
    WHERE cate_descrip LIKE ?
    AND pub_name LIKE ?
    AND book_price < ?
    AND book_price > ?;`, [category, publisher, plt, pgt], (err, rows) => {
    
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
