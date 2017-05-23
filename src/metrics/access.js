const db = require('../../models');

const decode = require('../shortener/decode');

const accessed = (key) => {

    if(!key || !key instanceof String)
        return Promise.reject(new Error('no valid hash provided'));

    const decodedKey = decode(key);

    const body = {
        key : decodedKey
    };

    return db.Access.create(body);
};

module.exports.accessed = accessed;
