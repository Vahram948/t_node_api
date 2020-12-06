module.exports = {
    port: process.env.PORT || 4000,
    socketPort: process.env.SOCKET_PORT || 5000,
    redisUrl: process.env.REDIS_URL || '',
    redisSubChannel: process.env.REDIS_SUB_CHANNEL || 'events'
}