const Queue = require('bull');

const redisPort = parseInt(process.env.REDIS_MASTER_SERVICE_PORT) || 0;
const redisHost = process.env.REDIS_MASTER_SERVICE_HOST;

const access = Queue('access', redisPort, redisHost);

module.exports = {
    access
};