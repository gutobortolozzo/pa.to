const db = require('../../models');

module.exports = (queue, callback) => {

    queue.process(async (job, done) => {

        try{
            db.sequelize.transaction(async () => await callback(job.data));
            done();
        } catch(err){
            done(err);
        }
    });
};