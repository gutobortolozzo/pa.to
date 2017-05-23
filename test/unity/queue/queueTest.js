require('should');

const publish = require('../../../src/queue/publish');
const subscribe = require('../../../src/queue/subscribe');
const queues = require('../../../src/queue/queues');

describe('Queue', () => {

    const testEvent = 'test-event';

    it('should publish and subscribe to test-event', (done) => {

        subscribe(queues.access, (data) => {
            data.testEvent.should.be.eql('test-event');
            done();
        });

        const data = {
            testEvent
        };

        publish(queues.access, data);
    });
});