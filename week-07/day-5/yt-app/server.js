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
  database: 'ytsongs',
  insecureAuth: 'ture',
});

conn.connect((err) => {
  if (err) {
    console.log(err.toSting());
  }
  console.log('connected to mysql');
});

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/songs', (req, res) => {
  conn.query('SELECT * FROM songs', (err, rows) => {
    if (err) {
      res.status(500).json(err);
    }
    res.status(200).json(rows);
  });
});

app.post('/addsong', (req, res) => {
  conn.query(
    `INSERT INTO songs (title, artist, url) VALUES (?,?,?);`,
    [req.body.title, req.body.artist, req.body.url],
    (err) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      res.send('Sikerult');
    }
  );
});

app.listen(3000);

// mysql> CREATE TABLE `songs` (
// -> `id` INT NOT NULL AUTO_INCREMENT,
// -> `title` VARCHAR(256) NOT NULL,
// -> `artist` VARCHAR(256) NOT NULL,
// -> `url` VARCHAR(256) NOT NULL,
// -> PRIMARY KEY (`id`)
// -> );
