const db = require('../../models');
const decode = require('../shortener/decode');
const axios = require('axios');

const userAgentDefaultValue = 'other';
const locationDefaultValue = 'N/A';
const ipProvider = 'http://freegeoip.net/json/';

const accessed = (key, userAgentFields, geoLocation) => {

    if(!key || !key instanceof String)
        return Promise.reject(new Error('no valid hash provided'));

    const decodedKey = decode(key);

    const accesskey = {
        key : decodedKey
    };

    const body = Object.assign(accesskey, userAgentFields, geoLocation);

    return db.Access.create(body);
};

const userAgent = (userAgent) => {

    return {
        isMobile  : userAgent.isMobile,
        isDesktop : userAgent.isDesktop,
        isBot     : userAgent.isBot,
        browser   : userAgent.browser || userAgentDefaultValue,
        version   : userAgent.version || userAgentDefaultValue,
        platform  : userAgent.platform || userAgentDefaultValue,
    };
};

const geoLocationAddress = (ip) => {

    return axios.get(`${ipProvider}${ip}`)
        .then(response => {
            const responseData = response.data;

            return {
                country : responseData.country_code,
                region  : responseData.region_code,
                city    : responseData.city
            }
        })
        .catch(_ => {
            return {
                country : locationDefaultValue,
                region  : locationDefaultValue,
                city    : locationDefaultValue
            }
        });
};

module.exports.geoLocationAddress = geoLocationAddress;
module.exports.userAgent = userAgent;
module.exports.accessed = accessed;
