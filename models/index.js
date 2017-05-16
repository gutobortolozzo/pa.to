'use strict';

var fs = require('fs');
var path = require('path');
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];
var db = {};

const cls = require('continuation-local-storage');
const namespace = cls.createNamespace('my-very-own-namespace');

var Sequelize = require('sequelize');
Sequelize.cls = namespace;

var sequelize = new Sequelize(config.database, config.username, config.password, config);

fs.readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file !== 'hooks.js') && (file.slice(-3) === '.js');
    })
    .forEach(function (file) {
        var model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.namespace = namespace;

module.exports = db;