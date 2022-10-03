const dbConfig = require('../config/dbConfig')
const Sequelize  = require('sequelize')

const UserTable = dbConfig.define('music', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    artist: {
        type: Sequelize.STRING,
        allowNull: false
    },
    song: {
        type: Sequelize.STRING,
        allowNull: false
    },
    album: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = UserTable