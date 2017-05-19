const queue = require('./conector');

const jobOptions = {
    attempts: 3,
    backoff: {
        type  : "exponential",
        delay : 1000
    },
    removeOnComplete: true,
    removeOnFail: true
};

module.exports = (event, data) => {

    queue.add(event, data, jobOptions);

};