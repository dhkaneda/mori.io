const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/wftodo', { useNewUrlParser: true, useUnifiedTopology: true });