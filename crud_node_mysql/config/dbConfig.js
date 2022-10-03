const Sequelize = require('sequelize')
const dbConfig = new Sequelize('studio', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = dbConfig