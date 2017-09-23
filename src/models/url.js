const shortid = require('shortid');
const rethink = require('rethinkdb');
const database = require('../database/database');

const table = "url";

const insertOptions = {
    durability : "soft",
    returnChanges: false,
    conflict: "replace",
};

module.exports.create = (link) => {

    const record = {
        key: shortid.generate(),
        createdAt: new Date().getTime(),
        link: link
    };

    return database.getConnection()
        .then(connection => {
            return rethink.table(table).insert(record, insertOptions).run(connection);
        })
        .then(_ => {
            return record;
        })
};

module.exports.getByKey = (key) => {
    return database.getConnection()
        .then(connection => {
            return rethink.table(table).getAll(key, { index: "key" }).limit(1).run(connection);
        })
        .then(cursor => {
            return cursor.toArray();
        })
        .then(array => {
            return array[0];
        })
};