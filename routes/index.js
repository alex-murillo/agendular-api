const express = require('express')
const itemsRouter = require('./items.router')
const dailiesRouter = require('./dailies.router')

function routerApi(app) {
    const router = express.Router()
    app.use('/api/v1', router)
    
    router.use('/items', itemsRouter);
    router.use('/dailies', dailiesRouter); // (dev07)
}

module.exports = routerApi