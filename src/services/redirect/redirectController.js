const db = require('../../../models');
const decode = require('../../shortener/decode');
const enqueueAccess = require('../../metrics/enqueue');

const redirect = async (request, response) => {

    const key = request.params.key;

    if(!key){
        response.status(400);
        response.send({ error : "invalid key requested" });
        return response;
    }

    console.log('Request key', key);

    const decodedKey = decode(key);

    const query = {
        where : {
            key : decodedKey
        }
    };

    const urlEntity = await db.URL.findOne(query);

    if(!urlEntity){
        response.status(400);
        response.send({ error : "key not found" });
        return response;
    }

    enqueueAccess(key, request);

    response.redirect(302, urlEntity.link);
    return response;
};

module.exports = {
    '/:key' : {
        method  : 'GET',
        handler : redirect
    }
};