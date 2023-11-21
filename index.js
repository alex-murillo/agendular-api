const express = require('express')
const routerAPI = require('./routes')
const cors = require('cors')
const app = express()
const PORT = 3000

const { loggerError, errorHandler, boomErrorHandler } = require('./middlewares/error.middleware')

app.use(cors())
app.use(express.json()) // middleware (dev04)

app.get('/', (req, res) => {
    // req. request
    // res. response
    
    res.send('Server en express')
})

routerAPI(app)

app.use(loggerError)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server corriendo en ${PORT}`)
})