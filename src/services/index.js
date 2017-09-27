const Promise = require('bluebird');
const glob = require("glob");
const express = require('express');
const useragent = require('express-useragent');
const bodyParser = require('body-parser');
const cors = require('cors');
const stats = require('../stats/stats');

const server = express();

server.enable('trust proxy');
server.use(useragent.express());
server.use(bodyParser.json());
server.use(cors());

const registerRoute = (route, controller) => {

    const controllerInterface = controller[route];

    const method = controllerInterface.method.toLowerCase();

    server[method](route, (request, response, next) => {

        return Promise.resolve(controllerInterface.handler(request, response))
            .finally(_ => {
                next();
            });
    });
};

const registerController = (controller) => {
    Object.keys(controller).map(route => registerRoute(route, controller));
};

const globOptions = {
    cwd : './src/services'
};

const controllersPaths = glob.sync("**/*Controller.js", globOptions);
const controllers = controllersPaths.map((controller) => {
    console.log(controller);
    return require(`./${controller}`);
});

controllers.forEach(registerController);

server.use((request, response, next) => {

    const timeStart = Date.now();

    const timeEnd = () => {
        const total = Date.now() - timeStart;
        stats(request.route.path, total);
    };

    response.on('finish', timeEnd);
    response.on('close', timeEnd);

    next();
});


module.exports = server;