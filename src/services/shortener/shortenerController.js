const link = require('../../link/link');
const urlModel = require('../../models/url');

const URL = process.env.BASE_URL;

const shortener = (request, response) => {

    const url = request.body.url;

    const isValid = link.isValidLink(url);

    if(!isValid){
        response.status(400);
        response.send({ error : "invalid URL" });
        return;
    }

    return urlModel.create(url)
        .then(record => {
            const responseBody = {
                key : record.key,
                url : `${URL}${record.key}`
            };

            response.status(200);
            response.send(responseBody);
        })
};

module.exports = {
    '/shortener' : {
        method  : 'POST',
        handler : shortener
    }
};