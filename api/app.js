const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const redis = require('redis');
const { redisSubChannel, socketPort } = require('./config');

// Create subscriber for listening events
const subscriber = redis.createClient();

// Create socket server on port 5000
const io = require('socket.io')(socketPort);

// Handle redis publisher messages
subscriber.on('message', function (channel, message) {
    io.emit(channel, message)
})

// Subscribe to given channel
subscriber.subscribe(redisSubChannel);

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('Redis-Socket Service API');
});

module.exports = app;