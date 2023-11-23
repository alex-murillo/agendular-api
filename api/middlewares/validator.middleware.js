

const boom = require('@hapi/boom')

function validatorHandler(schema, property) {

    // Closure en JavaScript, son funciones "encapsuladoras"
    // Middleware Dinámico, necesario por la variedad de esquemas (dev09)
    return (req, res, next) => {
        const data = req[property] 
        const { error } = schema.validate(data)

        if (error) {
            next(boom.badRequest(error))
        } else {
            next()
        }
    }
}

module.exports = validatorHandler