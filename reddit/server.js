'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(express.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'reddit',
  insecureAuth: 'true',  
});

// connects to mysq
conn.connect((err) => {
  if (err) throw err;
  console.log('Connected to mysql');
});

// checks the response
app.get('/', (req,res) => {
  res.status(200).json({Status: "Connection established: postman has been reached by the server"});
});

// sends all the active posts
app.get('/posts', (req,res) => {
  conn.query(
    `SELECT * FROM posts WHERE is_active = true`, [], (err, rows) => {
      if (err) {
        console.log(err.toString());
        res.status(500).json({error: 'error during writing sql db'})
        return;
      }
      res.status(200).json(rows);
    });
});

// sends a single post based on id
app.get('/posts/:id', (req,res) => {
  let id = req.params.id;
  conn.query(
    `SELECT * FROM posts WHERE is_active = true AND post_id = ?`, [id], (err, rows) => {
      if (err) {
        console.log(err.toString());
        res.status(500).json({error: 'error during writing sql db'})
        return;
      }
      res.status(200).json(rows);
    });
});

// adds new post
app.post('/posts', (req,res) => {
  let title = req.body.title;
  let url = req.body.url;
  let owner = req.body.owner;

  conn.query(
    `INSERT INTO posts (title, url, owner) VALUES (?,?,?);`, [title, url, owner], (err, rows) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      res.status(200).json(rows);
    });
});

// upvote
app.put('/posts/:id/upvote', (req,res) => {
  let id = req.params.id;
  conn.query(
    `UPDATE posts SET score = score + 1 WHERE post_id = ?;`, [id], (err, rows) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      res.status(200).json(rows);
    });
});

// downvote
app.put('/posts/:id/downvote', (req,res) => {
  let id = req.params.id;
  conn.query(
    `UPDATE posts SET score = score - 1 WHERE post_id = ?;`, [id], (err, rows) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      res.status(200).json(rows);
    });
});

// delete
app.delete('/posts/:id', (req,res) => {
  let id = req.params.id;
  conn.query(
    `UPDATE posts SET is_active = false WHERE post_id = ?;`, [id], (err, rows) => { // owner = null is deleting?
      if (err) {
        res.status(500).json(err);
        return;
      }
      res.status(200).json(rows);
    });
});

// retieve deleted posts
app.delete('/posts/:id/recycle', (req,res) => {
  let id = req.params.id;
  conn.query(
    `UPDATE posts SET is_active = true WHERE post_id = ?;`, [id], (err, rows) => { // owner = null is deleting?
      if (err) {
        res.status(500).json(err);
        return;
      }
      res.status(200).json(rows);
    });
});

// update post
app.put('/posts/:id', (req,res) => {
  let id = req.params.id;
  let title = req.body.title;
  let url = req.body.url;

  conn.query(
    `UPDATE posts SET (title, url) VALUE (?,?) WHERE post_id = ?;`, [title, url, id], (err, rows) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      res.status(200).json(rows);
    });
});

app.listen(3000);
