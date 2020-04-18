const express = require('express');
const path = require('path');
const { User, LifeExpectancy } = require('../database');
require('../database');

const app = express();
const port = 4444;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.post('/api/users', (res, req) => {
  const {
    username,
    email,
    password,
    age,
    sex,
    country,
  } = req.body;

  const lifeExpectancy = LifeExpectancy.find({ name: country })
    .then((stat) => {
      if (sex !== 'other') {
        return stat.sex;
      }
      return stat.average;
    });

  const options = {
    username,
    email,
    password,
    deathday: new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * (lifeExpectancy - age)),
  };

  const newUser = new User(options);
  newUser.save();
});

app.listen(port, () => {
  console.log(`Server is running, listening on port ${port}`);
});
