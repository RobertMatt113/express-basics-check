const {Sequelize, DataTypes} = require('sequelize');

// Connecting to data base
const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'cacadeperro113',
    post: 5432,
    database: 'checkDB'
});

module.exports = {db, DataTypes};