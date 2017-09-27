const publish = require('../queue/publish');
const subscribe = require('../queue/subscribe');
const queues = require('../queue/queues');
const statsModel = require('../models/stats');

module.exports = (path, timeSpent) => {

    const data = {
        path: path,
        timeSpent: timeSpent,
        createdAt: new Date()
    };

    publish(queues.stats, data);
};

subscribe(queues.stats, (data) => {

    return statsModel.deleteOlderThan()
        .then(() => {

            const record = {
                path: data.path,
                timeSpent: data.timeSpent,
                createdAt: new Date(data.createdAt)
            };

            return statsModel.create(record);
        })
        .catch(console.log);
});