const db = require('../../models');

const decode = require('../shortener/decode');

const accessed = (key) => {

    const decodedKey = decode(key);

    const body = {
        key : decodedKey
    };

    return db.Access.create(body);
};

module.exports.accessed = accessed;
