module.exports = (queue, data) => {

    const jobOptions = {
        attempts: 3,
        backoff: {
            type  : "exponential",
            delay : 1000
        },
        removeOnComplete: true,
        removeOnFail: true
    };

    queue.add(data, jobOptions);
};