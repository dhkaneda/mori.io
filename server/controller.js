const _ = require('lodash');
const { User } = require('../database');
const countryStats = require('./utils/lifeExpectancy');

const createUser = (req, res) => {
  const {
    username,
    email,
    password,
    age,
    sex,
    location,
  } = req.body;

  const lifeExpectancy = _.find(countryStats, _.matchesProperty('name', location));

  const options = {
    username,
    email,
    password,
    deathday: new Date(new Date().getTime()
      + 24 * 60 * 60 * 1000 * 365 * (lifeExpectancy[sex] - age)),
  };

  const user = new User(options);

  user.save()
    .then(() => res.send())
    .catch((err) => console.error(err));
};

const getUser = (req, res) => {
  const { email } = req.body;
  // const user = new User();
  User.find({ email })
    .then((userdoc) => res.send(userdoc))
    .catch((err) => res.send(err));
};

module.exports = {
  createUser,
  getUser,
};
