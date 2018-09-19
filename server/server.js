require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan');
const { ObjecID } = require('mongodb');

const { mongoose } = require('./db/mongoose');
const { User } = require("./models/user");

const app = express();
const port = process.env.PORT;

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello Wrold');
})

app.post('/users', (req, res) => {
  const body = _.pick(req.body, ['email', 'password']);
  const user = new User(body)

  user.save().then(user => {
    return user.generateAuthToken();
  }).then(token => {
    res.header('x-auth', token).send(body);
  }).catch(e => {
    res.status(400).send(e);
  })
})

app.listen(port, () => {
  console.log('Started on port ', port);
});
