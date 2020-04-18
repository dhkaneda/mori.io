const _ = require('lodash');
const { User } = require('../database');
const countryStats = require('../database/seed/lifeExpectancy');

const createUser = (req, res) => {
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
    deathday: new Date(new Date().getTime()
      + 24 * 60 * 60 * 1000 * 365 * (lifeExpectancy[sex] - age)),
  };

  const newUser = new User(options);

  newUser.save()
    .then(() => res.send())
    .catch((err) => console.error(err));
};

module.exports = {
  createUser,
};
