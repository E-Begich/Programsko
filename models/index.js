const { noBoolOperatorAliases } = require('sequelize/lib/utils/deprecations');
const dbConfig = require('../config/dbConfig.js');
const {Sequelize, Datatypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        peratorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }

)
sequelize.authenticate()
.then(() => {
    console.log('connected')
})
.catch(err => {
    console.log('Error' + err)
})

const db = {}