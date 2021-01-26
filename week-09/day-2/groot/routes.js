const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  // TODO: implement this method
  if (req.query.message !== undefined) {
    let message = req.query.message;
    res.status(200).send(JSON.stringify({
      "received": `${message}`,
      "translated": "I am Groot!"}))
  } else {
    res.status(400).send(JSON.stringify({"error": "I am Groot!"}))
    }
});

module.exports = app;