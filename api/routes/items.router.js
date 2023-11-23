const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    // req. request (solicitud/petición)
    // res. response (respuesta)

    const { category } = req.query

    const ITEMS = [
        { 
            nombre: "item 1",
            cantidad: 3,
            category: "A"
        },
        { 
            nombre: "item 2",
            cantidad: 1,
            category: "B"
        }
    ]

    if (category) {
        // El método filter devuelve siempre un arreglo

        // Status-codes (dev05)
        const filteredItems = ITEMS.filter(item => item.category === category)

        if (filteredItems.length > 0) {
            res.status(200).json(filteredItems)
        } else {
            res.status(204).send()
        }
    } else {
        res.json(ITEMS)
    }

})

router.get('/view', (req, res) => {
    res.type('html').send('<p>Items View</p>')
})

router.get('/:id', (req, res) => {
    // req. request (solicitud/petición)
    // res. response (respuesta)
    
    const { id } = req.params; // # params

    res.json(
        { 
            id: id, 
            nombre: "item 1",
            cantidad: 3,
            category: "A"
        }
    )

})

// post (dev04)
router.post('/', (req, res) => {
    const body = req.body
    res.status(201).json({ // Status-codes (dev05)
        message: "created",
        data: body
    })
})

// patch (dev05)
router.patch('/:id', (req, res) => {
    const { id } = req.params
    const body = req.body
    res.json({
        message: "update",
        data: body,
        id
    })
})

// put (dev05)
router.put('/:id', (req, res) => {
    const { id } = req.params
    const body = req.body
    res.json({
        message: "update",
        data: body,
        id
    })
})

// delete (dev05)
router.delete('/:id', (req, res) => {
    const { id } = req.params
    res.json({
        message: "deleted",
        id
    })
})

module.exports = router
