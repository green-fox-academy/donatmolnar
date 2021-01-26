'use strict';

const express = require('express');
const app = express();

app.get('/yondu', (req, res) => {
  let distance = req.query.distance;
  let time = req.query.time;

  if (distance === undefined || time === undefined) {
    res.status(400).send({ error: 'missing parameters' });
  } else if (distance <= 0 || time <= 0) {
    res.status(400).send({ error: 'distance and time must be greater than 0' });
  } else {
    res.status(200).send({
      distance: `${distance}`,
      time: `${time}`,
      speed: `${distance / time}`,
    });
  }
});

app.listen(3000);

module.exports = app;
