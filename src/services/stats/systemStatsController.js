const urlModel = require('../../models/url');
const enqueueAccess = require('../../metrics/enqueue');

const redirect = (request, response) => {

    const key = request.params.key;

    if(!key){
        response.status(400);
        response.send({ error : "invalid key" });
        return Promise.resolve();
    }

    return urlModel.getByKey(key)
        .then(record => {
            if(!record){
                response.status(400);
                response.send({ error : "key not found" });
            } else {
                enqueueAccess(key, request);
                response.redirect(302, record.link);
            }
        })
};

module.exports = {
    '/api/system/stats' : {
        method  : 'GET',
        handler : redirect
    }
};