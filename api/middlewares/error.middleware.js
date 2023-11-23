function loggerError(error, req, res, next) {
    // eslint-disable-next-line no-console
    console.error(error)

    next(error)
}

// eslint-disable-next-line no-unused-vars
function errorHandler(error, req, res, next) {

    res.status(500).json({
        message: error.message,
        stack: error.stack
    })
}

function boomErrorHandler(err, req, res, next) {

    if (err.isBoom) {
        const { output } = err
        res.status(output.statusCode).json(output.payload)
    } else {
        next(err)
    }

}

module.exports = { loggerError, errorHandler, boomErrorHandler }