const db = require('../../../models');
const link = require('../../link/link');
const encode = require('../../shortener/encode');

const shortener = async (request, response) => {

    const url = request.body.url;

    const isValid = link.isValidLink(url);

    if(!isValid){
        response.status(400);
        response.send({ error : "invalid URL" });
        return;
    }

    const urlEntity = await db.URL.create({
        link: url
    });

    const encoded = encode(urlEntity.key);

    response.status(200);
    response.send(encoded);

    return response;
};

module.exports = {
    '/shortener' : {
        method  : 'POST',
        handler : shortener
    }
};