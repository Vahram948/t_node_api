const app = require('./api/app');
const { port } = require('./api/config');
const redis = require('redis');
const { redisSubChannel, redisHost } = require('./api/config');

// Create Http Server 
const server = require('http').Server(app);

console.log('REDIS HOST: ', redisHost);

// Create subscriber for listening events
const subscriber = redis.createClient({ host: redisHost });

// Subscribe to given channel
subscriber.subscribe(redisSubChannel);

// Create and attach socket server
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
});

// Handle redis publisher messages
subscriber.on('message', function (channel, message) {
    io.emit(channel, message)
})

server.listen(port, '0.0.0.0', (e) => {
    if (e) {
        throw new Error('Internal Server Error');
    }
    console.log("Test API running on port:" + port);
});