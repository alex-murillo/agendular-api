// Crear nuevas rutas de dailies para agendular (dev06)

const express = require("express");
const DailiesService = require("../services/dailies.service");

// Middlewares de Ruta (dev09)
const validatorHandler = require("../middlewares/validator.middleware");

// Middlewares de Ruta (dev09)
const {
    createDailySchema,
    updateDailySchema,
} = require("../schemas/daily.schema");

const router = express.Router(); // Router
const service = new DailiesService(); // Dailies Service

// Crear nuevo daily con sequelize ORM (dev07)
router.post("/", validatorHandler(createDailySchema, "body"), async (req, res, next) => {
    try {
        const body = req.body;
        const newDaily = await service.create(body);
        res.status(201).json(newDaily);
    } catch (error) {
        next(error);
    }
});

// Obtener dailies con sequelize ORM (dev07)
router.get("/", async (req, res, next) => {
    try {
        const dailies = await service.all(); // async/await del método all
        res.status(200).json(dailies);
    } catch (error) {
        next(error);
    }
});

// Actualizar daily
router.put("/", validatorHandler(updateDailySchema, "body"), async (req, res, next) => {
    try {
        const body = req.body;
        const daily = await service.update(body);
        res.status(200).json(daily);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
