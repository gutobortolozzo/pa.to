const db = require('../../models');
const glob = require("glob");
const express = require('express');
const useragent = require('express-useragent');

const server = express();
server.use(useragent.express());

const globOptions = {
    cwd : './src/services'
};

const controllersPaths = glob.sync("**/*Controller.js", globOptions);
const controllers = controllersPaths.map((controller) => require(`./${controller}`));

controllers.forEach(controller => {

    Object.keys(controller).map(route => {

        const controllerInterface = controller[route];

        const method = controllerInterface.method.toLowerCase();

        server[method](route, async (request, response, next) => {

            const transactionOptions = {
                autocommit: false
            };

            await db.sequelize.transaction(transactionOptions, async () => {
                await controllerInterface.handler(request, response);
            });

            next();
        });
    });
});

module.exports = server;