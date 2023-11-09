require('dotenv').config();

const configs = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
};

module.exports = configs;
