const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  if (req.query.message !== undefined) {
    let message = req.query.message;
    res.status(200).send({
      "received": `${message}`,
      "translated": "I am Groot!"});
  } else {
    res.status(400).send({"error": "I am Groot!"});
    }
});

module.exports = app;