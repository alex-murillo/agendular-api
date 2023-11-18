const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
    // req. request
    // res. response
    res.send('Server en express')
})

app.get('/items', (req, res) => {
    // req. request (solicitud/petición)
    // res. response (respuesta)

    // eslint-disable-next-line no-console
    console.log(req.query)

    res.json({
        query_params: req.query
    })

})

app.get('/items/view', (req, res) => {
    // Response HTML View
    res.type('html').send('<p>Items View</p>')
})

app.get('/items/:id', (req, res) => {
    // req. request (solicitud/petición)
    // res. response (respuesta)
    
    const { id } = req.params; // # params

    res.json(
        { 
            id: id, 
            name: "Item"
        }
    )
})

app.post('/items', (req, res) => {
    const body = req.body

    res.json({
        message: "created",
        data: body
    })
})

app.put('/items/:id', (req, res) => {
    const { id } = req.params
    const body = req.body

    res.json({
        message: "updated",
        data: body,
        id: id
    })
})

app.delete('/items/:id', (req, res) => {
    const { id } = req.params

    res.json({
        message: "deleted",
        id
    })
})

// Ocasiona un issue de routing (choque de rutas)
// app.get('/items/view', (req, res) => {
//     res.type('html').send('<p>Items View</p>')
// })

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server corriendo en ${PORT}`)
})