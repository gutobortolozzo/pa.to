const rethink = require('rethinkdb');
const database = require('../database/database');

const table = "access";

const insertOptions = {
    durability : "soft",
    returnChanges: false,
    conflict: "replace",
};

module.exports.create = (accessModel) => {

    return database.getConnection()
        .then(connection => {
            return rethink.table(table).insert(accessModel, insertOptions).run(connection);
        });
};

module.exports.count = (modelKey) => {

    return database.getConnection()
        .then(connection => {
            return rethink.table(table)('key').count(modelKey).run(connection);
        });
};

module.exports.countAll = () => {

    return database.getConnection()
        .then(connection => {
            return rethink.table(table).count().run(connection);
        });
};

module.exports.stats = () => {
    return database.getConnection()
        .then(connection => {
            return rethink.table(table).group('country').map(function(group){
                return {
                    name: group("country") || "",
                    count: 1
                }
            }).reduce(function(left, right) {
                return {
                    name: right("name"),
                    count: left("count").add(right("count"))
                }
            }).run(connection);
        });
};

// {
//     key: {
//         type: DataTypes.INTEGER,
//             primaryKey: true
//     },
//     createdAt: {
//         type: DataTypes.DATE,
//             defaultValue: DataTypes.NOW
//     },
//     isMobile: {
//         type: DataTypes.BOOLEAN,
//             defaultValue: false
//     },
//     isDesktop: {
//         type: DataTypes.BOOLEAN,
//             defaultValue: false
//     },
//     isBot: {
//         type: DataTypes.BOOLEAN,
//             defaultValue: false
//     },
//     browser: {
//         type: DataTypes.STRING(40),
//             defaultValue: ""
//     },
//     version: {
//         type: DataTypes.STRING(40),
//             defaultValue: ""
//     },
//     platform: {
//         type: DataTypes.STRING(40),
//             defaultValue: ""
//     },
//     country: {
//         type: DataTypes.STRING,
//             defaultValue: ""
//     },
//     region: {
//         type: DataTypes.STRING,
//             defaultValue: ""
//     },
//     city: {
//         type: DataTypes.STRING,
//             defaultValue: ""
//     }
// }