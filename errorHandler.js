const NotFoundError = require("./errors/NotFoundError");
const { ValidationError } = require("yup");
const { UniqueConstraintError } = require("sequelize");

module.exports.errorHandler = async (err, req, res, next) => {
  console.log(err);
  if (err instanceof NotFoundError) {
    return res.status(404).send({
      errors: {
        message: err.message,
      },
    });
  }

  if (err instanceof ValidationError) {
    return res.status(404).send({
      errors: {
        message: err.message,
      },
    });
  }

  if (err instanceof UniqueConstraintError) {
    return res.status(404).send({
      errors: {
        message: "Hero is already exists",
      },
    });
  }
};
