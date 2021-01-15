'use strict';

const express = require('express');
const app = express();
const mysql = mysql();

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ytsongs',
  insecureAuth: 'ture',
});

conn.connect((err) => {
  if(err) {
    console.log(err.toSting());
  }
  console.log('connected to mysql');
})

app.get('/', (req,res) => {
  res.send('connection established')
})

app.get('/songs', (req,res) => {
  conn.query('SELECT * FROM songs', (err, rows) => {
    if(err) {
      res.status(500).json(err);
    }
    res.status(200).json(rows);
  });
});

app.listen(3000);




// mysql> CREATE TABLE `songs` (
// -> `id` INT NOT NULL AUTO_INCREMENT,
// -> `title` VARCHAR(256) NOT NULL,
// -> `artist` VARCHAR(256) NOT NULL,
// -> `url` VARCHAR(256) NOT NULL,
// -> PRIMARY KEY (`id`)
// -> );
