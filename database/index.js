const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/morio', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Success! Connected to MongoDB!'))
  .catch((error) => console.error(error));
