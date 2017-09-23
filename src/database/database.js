const rethinkdb = require('rethinkdb');
const databaseConfig = require('../../config/database');

const configuration = Object.assign({ db: databaseConfig.database.name }, databaseConfig);

module.exports.getConnection = () => {
    return rethinkdb.connect(configuration);
};

module.exports.getTables = () => {
    return rethinkdb.connect(databaseConfig)
        .then(connection => {
            return rethinkdb.db(databaseConfig.database.name).tableList().run(connection);
        });
};

module.exports.getDatabases = () => {
    return rethinkdb.connect(databaseConfig)
        .then(connection => {
            return rethinkdb.dbList().run(connection);
        })
};

module.exports.createDatabase = (databaseName) => {
    return rethinkdb.connect(databaseConfig)
        .then(connection => {
            return rethinkdb.dbCreate(databaseName).run(connection);
        });
};

module.exports.createTable = (tableName, config) => {
    return rethinkdb.connect(databaseConfig)
        .then(connection => {
            return rethinkdb.db(databaseConfig.database.name).tableCreate(tableName, config).run(connection);
        });
};

module.exports.createIndex = (tableName, fieldName) => {
    return rethinkdb.connect(databaseConfig)
        .then(connection => {
            return rethinkdb.db(databaseConfig.database.name).table(tableName).indexCreate(fieldName).run(connection);
        });
};

module.exports.getIndexes = (tableName) => {
    return rethinkdb.connect(databaseConfig)
        .then(connection => {
            return rethinkdb.db(databaseConfig.database.name).table(tableName).indexList().run(connection);
        });
};