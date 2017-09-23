const accessModel = require('../../models/access');

const redirect = (request, response) => {

    const key = request.params.key;

    if(!key){
        response.status(400);
        response.send({ error : "invalid key" });
        return Promise.resolve();
    }

    return accessModel.count(key)
        .then(record => {
            response.status(200);

            const data = {
                views: record,
                key: key
            };

            response.send(data);
        })
        .catch(err => {
            console.error(err);

            response.status(200);

            const data = {
                views: 0,
                key: key
            };

            response.send(data);
        })
};

module.exports = {
    '/api/access/counter/:key' : {
        method  : 'GET',
        handler : redirect
    }
};