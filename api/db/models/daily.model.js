const { Model, DataTypes } = require('sequelize')

// Nombre Tabla (dev07)
const DAILY_TABLE = 'dailies'

// Esquema de BD (dev07)
const DailySchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    note: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    emotion: {
        allowNull: false,
        type: DataTypes.STRING,        
    },
    // Nueva columna para migración (dev08)
    color: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: '#00ba73'
    },
    timestamp: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'daily_timestamp',
        defaultValue: () => Math.floor(Date.now() / 1000)
    }
}


// Extiende de Model para tener el ORM (dev07)
class Daily extends Model {
    static associate() {
        // associate (relaciones)
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: DAILY_TABLE,
            modelName: 'Daily',
            timestamps: false
        }
    }
}

module.exports = { DAILY_TABLE, DailySchema, Daily }

