const db = require('../../models');

const accessed = async (keyId) => {

    const body = {
        key : keyId
    };

    const accessEntity = await db.Access.create(body);
};


module.exports.accessed = accessed;
