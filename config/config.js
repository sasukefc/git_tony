module.exports = require('./env/' + process.env.NODE_ENV + '.js');

var config = require('./config');
config.mongoUri
config.sessionSecret