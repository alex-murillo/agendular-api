// Servicio de Dailies con BD SQLite (dev06)

// const getConnection = require("../config/sqlite");
const { Op } = require('sequelize')

const sequelize = require('../config/sequelize')
const { models } = require('../config/sequelize')
const boom = require('@hapi/boom')

class DailiesService {
    constructor() {
        this.dailies = [];
        this.db = sequelize;
    }

    async dailyCompleted() {

        const today = new Date()
        const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0)
        const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59)

        const startTimestamp = Math.floor(startOfDay/1000)
        const endTimestamp = Math.floor(endOfDay/1000)

        const daily = await models.Daily.findOne({
            where: {
                timestamp: {
                    [Op.between]: [startTimestamp, endTimestamp]
                } 
            }
        })

        return daily

    }

    // Crear con ORM de Sequelize (dev07)
    async create(data) {
        const daily = await this.dailyCompleted()

        if (daily) {
            throw boom.conflict()
        }
        const newDaily = await models.Daily.create(data)
        return newDaily
    }

    // Crear método para obtener todos (dev06)
    async all() {
        // Utilizar findAll de ORM Sequelize (dev07)
        const dailies = await models.Daily.findAll()
        return dailies


        // const queryAll = 'SELECT * FROM dailies' // Ejecutando query con sequelize (dev07)
        
        // // Sequelize devuelve este tipo de queries en un array [data, metadata]
        // const [data] = await this.db.query(queryAll)   
        
        // return data

        // const rows = await new Promise((resolve, reject) => {
        //     this.db.all("SELECT * FROM dailies", (err, rows) => {
        //         if (err) {
        //             reject(err);
        //         } else {
        //             resolve(rows);
        //         }
        //     });
        // });

        // return rows
    }

    // Actualizar con ORM Sequelize (dev07)
    async update(changes) {
        // const daily = await models.Daily.findByPk

        const daily = await this.dailyCompleted()

        if (!daily) {
            throw boom.notFound('daily not found')
        }

        const dailyChange = daily.update(changes)

        return dailyChange

    }
}

module.exports = DailiesService;
