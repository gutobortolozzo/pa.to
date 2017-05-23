require('should');

const db = require('../../../models');
const access = require('../../../src/metrics/access');
const transactionUtil = require('../transactionUtils');

describe('Metrics access', () => {

    it('should add one access counter for key access', async () => {

        await access.accessed("$AA")
            .then(_ => {
                return db.Access.findAll();
            })
            .then(accesses => {
                accesses.length.should.be.eql(1);
            });
    });

    it('should add two accesses counter for key access', async () => {

        await access.accessed("$AA")
            .then(_ => {
                return access.accessed("$AA");
            })
            .then(_ => {
                return db.Access.findAll();
            })
            .then(accesses => {
                accesses.length.should.be.eql(2);
            });
    });

    it('should throw error when no hash is provided', async () => {

        await access.accessed()
            .catch(error => {
                error.message.should.be.eql('no valid hash provided');
            });
    });

    transactionUtil.transactionalTestHooks();
});
