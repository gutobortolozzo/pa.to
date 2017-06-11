const db = require('../../../models');
const link = require('../../link/link');
const encode = require('../../shortener/encode');
const ttlJob = require('../../jobs/ttlJob');

const URL = "http://pa.to/";

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

    const responseBody = {
        key : encoded,
        ttl : ttlJob.daysToKeepData,
        url : `${URL}${encoded}`
    };

    response.status(200);
    response.send(responseBody);

    return response;
};

module.exports = {
    '/shortener' : {
        method  : 'POST',
        handler : shortener
    }
};