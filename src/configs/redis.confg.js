const redis = require('redis');
const client = redis.createClient({
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
    },
    password: process.env.REDIS_PASSWORD
});

client.on('error', (err) => console.log('Redis Client Error', err));
client.on('connect', () => console.log('Redis client connected'));

module.exports = client;