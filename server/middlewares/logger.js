const morgan = require('morgan');

const loggerMiddleware = morgan('tiny');

module.exports = loggerMiddleware;
