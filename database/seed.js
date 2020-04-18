const mongoose = require('mongoose');
const { LifeExpectancy } = require('.');
const countryStats = require('./seed/lifeExpectancy');

const saves = countryStats.map((country) => {
  const lifeExpectancy = new LifeExpectancy(country);
  return lifeExpectancy.save();
});

Promise.all(saves).then(() => {
  console.log('Database seeded with all countries\' stats');
  mongoose.connection.close();
});
