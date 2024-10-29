const NotFoundError = require("./errors/NotFoundError");

module.exports.errorHandler = async (err, req, res, next) => {
    console.log(err);
    if (err instanceof NotFoundError) {
        return res.status(404).send({errors: {
            message: err.message
        }})
    }
}