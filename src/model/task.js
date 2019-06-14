const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const Task = sequelize.define("tasks", {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    title: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
            len: [2, 200]
        }
    },
    author:{
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
            len: [2, 50]
        }
    },
    description: {
        allowNull: false,
        type: Sequelize.STRING,
        validate:{
            len: [10, 500]
        }
    }
});

module.exports = Task;