const hour = 1000 * 60 * 60;

module.exports.oneDay = () => hour * 24;

module.exports.daysAgo = (days) => Date.now() - days * 24 * hour;
