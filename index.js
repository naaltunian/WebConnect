const express = require('express');
const database = require("./config.js");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// database connection
const url = `mongodb://${database.dbUser}:${database.dbPassword}@ds243054.mlab.com:43054/web-connect`;
mongoose.connect(url, { useNewUrlParser: true })
    .then(() => console.log('DB Connected'))
    .catch(err => console.log(err))

// body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.get('/', (req, res) => res.send("running"));

// routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));