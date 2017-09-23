const health = (request, response) => {

    return new Promise((resolve, reject) => {
        response.status(200);
        response.send("health.");
        resolve();
    });
};

module.exports = {
    '/' : {
        method  : 'GET',
        handler : health
    }
};