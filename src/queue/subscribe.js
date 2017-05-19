const queue = require('./conector');

module.exports = (event, callback) => {

    queue.process(event, async (job, done) => {

        try{
            await callback(job.data);
            done();
        } catch(err){
            done(err);
        }
    });
};