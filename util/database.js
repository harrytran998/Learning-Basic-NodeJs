const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.USERNAME,
  process.env.PASSWORD, {
    dialect: 'mysql',
    host: process.env.HOST
  })

module.exports = sequelize
