module.exports = (queue, callback) => {

    queue.process(async (job, done) => {

        try{
            await callback(job.data);
            done();
        } catch(err){
            done(err);
        }
    });
};