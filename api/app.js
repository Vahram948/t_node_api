const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/api', (req, res) => {
    res.status(200).send('Redis-Socket Service API');
});

module.exports = app;