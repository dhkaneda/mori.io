const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {
  createUser,
  updateUser,
  createContract,
  attemptLogin,
  getUser,
  getStats,
} = require('./controller');
require('../database');

const app = express();
const port = 4444;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/users', createUser);
app.patch('/api/users', updateUser);
app.post('/api/contracts', createContract);
app.get('/api/users', getUser);
app.get('/api/stats', getStats);
app.get('/api/login', attemptLogin);

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running, listening on port ${port}`);
});
