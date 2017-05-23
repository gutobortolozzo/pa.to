const db = require('../../models/index');
const sequelizeFixtures = require('sequelize-fixtures');

module.exports.transactionalTestHooks = (fixture) => {

    let testTransaction = null;

    beforeEach(() => db.sequelize.transaction({autocommit: false}).then(t => testTransaction = t));

    if(fixture){
        beforeEach(() => sequelizeFixtures.loadFixtures(fixture, db, { transaction: testTransaction }));
    }

    beforeEach(() => db.namespace.set('transaction', testTransaction));

    afterEach(() => testTransaction.rollback());

};
