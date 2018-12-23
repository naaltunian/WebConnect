const express = require('express');
const database = require("./config.js");
const mongoose = require('mongoose');


const app = express();

// database connection
const url = `mongodb://${database.dbUser}:${database.dbPassword}@ds243054.mlab.com:43054/web-connect`;
mongoose.connect(url, { useNewUrlParser: true })
    .then(() => console.log('DB Connected'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send("running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));