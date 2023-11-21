// Coniguración de DB con Sequelize (dev07)

const { Sequelize } = require('sequelize')

const setupModels = require('../db/models')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.db',
    logging: true
})

// Se añaden modelos (dev07)
setupModels(sequelize)

// Sincronizar los nuevos modelos
// sequelize.sync()

module.exports = sequelize