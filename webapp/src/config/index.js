
const config = process.env.NODE_ENV !== 'production' ? require('./index.dev') : require('./index.pro');

module.exports = config;