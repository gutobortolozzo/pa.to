const db = require('../../../models');
const decode = require('../../shortener/decode');
const encode = require('../../shortener/encode');

const redirect = async (request, response) => {

    const key = request.params.key;

    if(!key){
        response.status(400);
        response.send({ error : "invalid key requested" });
        return response;
    }

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

    response.redirect(302, urlEntity.link);
    return response;
};

module.exports = {
    '/:key' : {
        method  : 'GET',
        handler : redirect
    }
};