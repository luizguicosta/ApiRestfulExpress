const Sequelize = require('sequelize');

//select environment
const environment = process.env.NODE_ENV || "dev";

const config = require('../config/config')[environment];

//config sequelize for mysql
const sequelize = new Sequelize(
    config.database.name,
    config.database.user,
    config.database.password,
    {
        host: config.database.host,
        dialect: config.database.dialect
    }
);

module.exports = sequelize;