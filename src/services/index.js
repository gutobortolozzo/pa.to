const db = require('../../models');
const glob = require("glob");
const express = require('express');
const useragent = require('express-useragent');
const bodyParser = require('body-parser');

const server = express();
server.use(useragent.express());
server.use(bodyParser.json());

const transactionalHandler = async (handler, request, response) => {

    const transactionOptions = {
        autocommit: false
    };

    await db.sequelize.transaction(transactionOptions, async () => {
        await handler(request, response);
    });
};

const registerRoute = (route, controller) => {

    const controllerInterface = controller[route];

    const method = controllerInterface.method.toLowerCase();

    server[method](route, async (request, response, next) => {

        await transactionalHandler(controllerInterface.handler, request, response);

        next();
    });
};

const registerController = (controller) => {
    Object.keys(controller).map(route => registerRoute(route, controller));
};

const globOptions = {
    cwd : './src/services'
};

const controllersPaths = glob.sync("**/*Controller.js", globOptions);
const controllers = controllersPaths.map((controller) => require(`./${controller}`));

controllers.forEach(registerController);

module.exports = server;