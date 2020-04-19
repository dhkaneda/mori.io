const _ = require('lodash');
const { User, Contract } = require('../database');
const countryStats = require('./utils/lifeExpectancy');

const createUser = (req, res) => {
  const { email } = req.body;
  const user = new User(req.body);

  user.save()
    .then(() => User.find({ email }))
    .then((userdoc) => res.send(userdoc))
    .catch((err) => res.send(err));
};

const updateUser = (req, res) => {
  const {
    email,
    age,
    sex,
    location,
  } = req.body;

  const lifeExpectancy = _.find(countryStats, _.matchesProperty('name', location));
  const deathday = new Date(new Date().getTime()
  + 24 * 60 * 60 * 1000 * 365 * (lifeExpectancy[sex] - age));

  User.find({ email })
    .then((users) => {
      const user = users[0];
      user.deathday = deathday;
      return user.save();
    })
    .then(() => res.send({ deathday }))
    .catch((err) => res.send(err));
};

const getUser = (req, res) => {
  const { email } = req.body;
  User.find({ email })
    .then((userdocs) => {
      res.send(userdocs[0]);
    })
    .catch((err) => res.send(err));
};

const createContract = (req, res) => {
  const { email } = req.body;
  const options = req.body.contract;

  User.find({ email })
    .then((users) => {
      const user = users[0];
      const contract = new Contract(options);
      user.contracts.push(contract);
      return user.save();
    })
    .then(() => res.send())
    .catch((err) => res.send(err));
};

const getStats = (req, res) => {
  const countries = countryStats.map((stat) => stat.name);
  res.send(countries);
};

module.exports = {
  createUser,
  updateUser,
  createContract,
  getUser,
  getStats,
};
