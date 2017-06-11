const queue = require('../queue/queues');
const publish = require('../queue/publish');
const subscribe = require('../queue/subscribe');
const dateUtil = require('../util/date');
const db = require('../../models');

const daysToKeepData = 30;

const publishTTLEraseEvent = () => publish(queue.ttl, {}, 1000 * 10);

const queueCallback = async () => {

    const query = {
        where : {
            createdAt: {
                lt: new Date(dateUtil.daysAgo(daysToKeepData))
            }
        }
    };

    await db.Access.destroy(query)
        .then(_ => {
            return db.URL.destroy(query);
        });
};


module.exports.register = () => {
    subscribe(queue.ttl, queueCallback);

    setInterval(() => {
        queue.ttl.clean(dateUtil.oneDay());
        queue.ttl.clean(dateUtil.oneDay(), 'failed');

        publishTTLEraseEvent();
    }, dateUtil.oneDay());
};

module.exports.daysToKeepData = Date.now() + daysToKeepData * dateUtil.oneDay();