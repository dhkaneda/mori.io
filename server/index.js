const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { createUser } = require('./controller');
require('../database');

const app = express();
const port = 4444;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());

app.post('/api/users', createUser);

app.listen(port, () => {
  console.log(`Server is running, listening on port ${port}`);
});
