'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');
//const path = require('path'); //res.sendFile(path.join(__dirname, 'assets/index.html'));


app.use(express.json()); //replaces body-parser
app.use(express.static('assets')); // makes assets folder publicly available
app.use(express.urlencoded({ extended: true })); //csak amikor html-form-ból jön az adat és nem json-ben req.bodyban.

// connects to the mysql database
let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookstore',
});

// checks connection to mysql
conn.connect((err) => {
  if (err) throw err;
  console.log('Connected to mysql');
});

app.get('/', (req,res) => {
  res.json({Status: "Connection established: postman has been reached by the server"});
  res.sendFile('index.html')
});

let category = '';
let publisher ='';
let plt = 0;
let pgt = 0;

// filters the results
app.get('/books', (req,res) => {

  let cat = req.query.category;
  cat === undefined ? category = '%' : category = `%${cat}%`;

  let pub = req.query.publisher;
  pub === undefined ? publisher = '%' : publisher = `%${pub}%`;

  req.query.plt === undefined ? plt = 99999999 : plt = req.query.plt;

  req.query.pgt === undefined ? pgt = 0 : pgt = req.query.pgt;

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
    res.json(rows); // must to be inside conn.query
  });
});
  
app.listen(3000);
