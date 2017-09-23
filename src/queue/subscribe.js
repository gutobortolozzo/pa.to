module.exports = (queue, callback) => {

    queue.process((job, done) => {

        callback(job.data)
            .then(_ => {
                done();
            })
            .catch(err => {
                done(err);
            });
    });
};