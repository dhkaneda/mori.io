const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const _ = require('lodash');
const { User, find } = require('../database');
const countryStats = require('../database/seed/lifeExpectancy');
require('../database');

const app = express();
const port = 4444;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());

app.post('/api/users', (req, res) => {
  const {
    username,
    email,
    password,
    age,
    sex,
    country,
  } = req.body;

  const lifeExpectancy = _.find(countryStats, _.matchesProperty('name', country));

  const options = {
    username,
    email,
    password,
    deathday: new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 365 * (lifeExpectancy[sex] - age)),
  };

  const newUser = new User(options);
  newUser.save()
    .then(() => res.send())
    .catch((err) => console.error(err));
});

app.listen(port, () => {
  console.log(`Server is running, listening on port ${port}`);
});
