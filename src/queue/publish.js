const jobOptions = {
    attempts: 3,
    backoff: {
        type  : "exponential",
        delay : 1000
    },
    removeOnComplete: true,
    removeOnFail: true
};

module.exports = (queue, data) => {

    queue.add(data, jobOptions);
};