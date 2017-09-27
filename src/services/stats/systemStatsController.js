const statsModel = require('../../models/stats');
const urlModel = require('../../models/url');
const accessModel = require('../../models/access');

const redirect = (request, response) => {

    const promises = [
        statsModel.groupedByEndpoint(),
        urlModel.countAll(),
        accessModel.countAll()
    ];

    return Promise.all(promises)
        .then(([groupedStats, totalUrls, totalAccess]) => {

            const data = {
                endpoints : groupedStats,
                urls      : totalUrls,
                accesses  : totalAccess
            };

            response.status(200);
            response.send(data);
        });
};

module.exports = {
    '/api/system/stats' : {
        method  : 'GET',
        handler : redirect
    }
};