const database = require('../database/database');

module.exports.migrate = () => {

    return module.exports.createDatabaseIfNotExist("pato")
        .then(_ => {

            const tableConfig = {
                shards: 3,
                replicas: 1,
                durability: "soft"
            };

            return module.exports.createTableIfNotExist("access", tableConfig);
        })
        .then(_ => {

            const tableConfig = {
                shards: 3,
                replicas: 1,
                durability: "soft"
            };

            return module.exports.createTableIfNotExist("url", tableConfig);
        })
        .then(_ => {
            return module.exports.createIndexIfNotExist('url', 'key');
        })
        .then(_ => {
            return module.exports.createIndexIfNotExist('access', 'key');
        })
        .then(_ => {
            console.log('DONE');
        });

};

module.exports.createDatabaseIfNotExist = (databaseName) => {

    return database.getDatabases()
        .then(databases => {
            return databases.indexOf(databaseName) >= 0
        })
        .then(databaseExist => {
            if(databaseExist){
                return Promise.resolve();
            } else {
                return database.createDatabase(databaseName);
            }
        })
};

module.exports.createTableIfNotExist = (tableName, config) => {

    return database.getTables()
        .then(tables => {
            return tables.indexOf(tableName) >= 0;
        })
        .then(tableExist => {
            if(tableExist){
                return Promise.resolve();
            } else {
                return database.createTable(tableName, config)
            }
        })
};

module.exports.createIndexIfNotExist = (tableName, fieldName) => {

    return database.getIndexes(tableName)
        .then(tables => {
            return tables.indexOf(fieldName) >= 0;
        })
        .then(indexExist => {
            if(indexExist){
                return Promise.resolve();
            } else {
                return database.createIndex(tableName, fieldName)
            }
        })
};