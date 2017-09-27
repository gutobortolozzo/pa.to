const rethink = require('rethinkdb');
const database = require('../database/database');

const table = "stats";

const insertOptions = {
    durability : "soft",
    returnChanges: false,
    conflict: "replace",
};

module.exports.create = (statsModel) => {

    return database.getConnection()
        .then(connection => {
            return rethink.table(table).insert(statsModel, insertOptions).run(connection);
        });
};

module.exports.groupedByEndpoint = () => {

    return database.getConnection()
        .then(connection => {
            return rethink.table(table).group('path').map(function(group){
                return {
                    name      : group("path") || "",
                    timeSpent : group("timeSpent"),
                    count     : 1
                }
            }).reduce(function(left, right) {
                return {
                    name      : right("name"),
                    timeSpent : left("timeSpent").add(right("timeSpent")),
                    count     : left("count").add(right("count"))
                }
            }).run(connection);
        });
};

module.exports.deleteOlderThan = () => {

    return database.getConnection()
        .then(connection => {

            const oneWeekAgo = new Date(new Date().getTime() - (1000 * 60 * 60 * 24 * 7)).toISOString();

            return rethink.table(table).filter(function(row){
                return row('createdAt').lt(rethink.expr(new Date(oneWeekAgo)))
            }).delete().run(connection);
        });
};