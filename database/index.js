const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/morio', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Success! Connected to MongoDB!'))
  .catch((error) => console.error(error));

// Schemas
const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  deathday: Date,
  contracts: [],
});

const contractSchema = mongoose.Schema({
  isOpen: Boolean,
  success: Boolean,
  description: String,
  deadline: Date,
  createdAt: Date,
  collateral: String,
  service: String,
  amount: Number,
});

const lifeExpectancySchema = mongoose.Schema({
  type: String,
  name: String,
  average: Number,
  male: Number,
  female: Number,
});

// Models
const User = mongoose.model('User', userSchema);
const Contract = mongoose.model('Contract', contractSchema);
const LifeExpectancy = mongoose.model('Life Expectancy', lifeExpectancySchema);


// Operations
const save = () => {
  return document.save();
};

const find = (model, options) => {
  return model.find(options)
    .then((docs) => docs)
    .catch((err) => console.error(err));
};

module.exports = {
  User,
  Contract,
  LifeExpectancy,
  save,
  find,
}