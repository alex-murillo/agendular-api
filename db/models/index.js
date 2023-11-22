// Index de todos los Modelos (dev07)

const { Daily, DailySchema } = require('./daily.model')

// Setup inicial de los modelos (dev07)
function setupModels(sequelize) {
    Daily.init(DailySchema, Daily.config(sequelize))
}

module.exports = setupModels