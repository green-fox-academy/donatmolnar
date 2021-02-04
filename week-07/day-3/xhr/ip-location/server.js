'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');
require('dotenv').config();

app.use(express.json());
app.use(express.static('public'));

const conn = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  insecureAuth: 'true',  
});

const googleApiKey = process.env.GOOGLE_API_KEY;
const ipApiKey = process.env.IP_API_KEY;
let latitude;
let longitude;
let map = `https://www.google.com/maps/embed/v1/place?key=${googleApiKey}&center=${latitude},${longitude}`;

// connects to mysq
conn.connect((err) => {
  if (err) throw err;
  console.log('Connected to mysql');
});

// sends the landingpage
app.get('/', (req,res) => {
  res.status(200).sendFile('index.html');
});

// sends user's ip address
app.get('/ip', (req,res) => {
  let ip = req.ip; //only works with express, otherwise req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress
  ip = ip.split(',')[0];
  ip = ip.split(':').slice(-1);
  ip = ip[0];

  res.status(200).json({ip: `${ip}`});
});


app.listen(3000);
