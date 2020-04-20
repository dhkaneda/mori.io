const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/morio', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Success! Connected to MongoDB!'))
  .catch((error) => console.error(error));

// Schemas
const userSchema = mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  salt: String,
  deathday: Date,
  contracts: [],
});

const contractSchema = mongoose.Schema({
  isOpen: Boolean,
  success: Boolean,
  description: { type: String, unique: true },
  deadline: Date,
  createdAt: Date,
  collateral: String,
  service: String,
  amount: Number,
});

// Models
const User = mongoose.model('User', userSchema);
const Contract = mongoose.model('Contract', contractSchema);

module.exports = {
  User,
  Contract,
};
