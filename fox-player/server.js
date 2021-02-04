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
  res.status(200).sendFile('foxplayer.html');
});

let playlists = [
  { "id": 1, "title": "Favorites", "system": 1 },
  { "id": 2, "title": "Music for programming", "system": 0 },
  { "id": 3, "title": "Driving", "system": 0 },
  { "id": 5, "title": "Fox house", "system": 0 },
];

// lists all playlists
app.get('/playlists', (req,res) => {
  conn.query(
    `SELECT * FROM playlists;`, (err, rows) => {
      if (err) {
        console.log(err.toString());
        res.status(500).json({error: 'error during reading sql db'});
        return;
      }
      res.setHeader('Content-type', 'application/json');
      res.status(200).json(playlists);
    });
});

// adds new playlist
app.post('/playlist', (req,res) => {
  let playlist = req.body.playlist;

  conn.query(
    `INSERT INTO playlists (title) VALUES ?;`, [playlist], (err, rows) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
    });

    conn.query(
      `SELECT * FROM playlists ORDER BY id;`, (err, rows) => {
        if (err) {
          console.log(err.toString());
          res.status(500).json({error: 'error during reading sql db'});
          return;
        }
        res.status(200).json(rows);
      });
});

// deletes playlist based on id if it is not system playlist
app.delete('/playlists/:id', (req, res) => {
  let providedId = req.params.id;
  let systemPlaylist;
  
  conn.query(
    `SELECT * FROM playlists WHERE id = ?`, [providedId], (err, rows) => {
      if (err) {
        console.log(err.toString());
        res.status(500).json({error: 'error during reading sql db'});
        return;
      }
      systemPlaylist = rows[0].system;
    }
  )

  if (systemPlaylist === 1) {
    res.json({error: 'System playlists cannot be removed'});
  } else {
    conn.query(
      `DELETE FROM playlists WHERE id = ?;`, [providedId], (err, rows) => {
        if (err) {
          console.log(err.toString());
          res.status(500).json({error: 'error during deleting playlist from sql db'});
          return;
        }
        res.status(200).json(rows);
    })
  }
})

let tracks = [
  { "id": 1, "title": "Never Give Up", "artist": "Ars Sonor", "duration": 545, "path": "/audio/Ars_Sonor_-_02_-_Never_Give_Up.mp3" },
  { "id": 2, "title": "Purple Drift", "artist": "Organoid", "duration": 312.12, "path": "/audio/Organoid_-_09_-_Purple_Drift.mp3" }
]

// lists all songs in a playlist
app.get('/playlist-tracks/:playlist_id', (req,res) => {
let playlistId = req.params.playlist_id;
/*
  conn.query(
    `SELECT * FROM tracks;`, (err, rows) => {
      if (err) {
        console.log(err.toString());
        res.status(500).json({error: 'error during reading sql db'});
        return;
      }  */
      res.setHeader('Content-type', 'application/json');
      res.status(200).json(tracks);
    //});
});



