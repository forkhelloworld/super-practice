const {heroCreateSchema} = require('../validation/heroSchema');

module.exports.validateBody = async (req, res, next) => {
    try {
        const {body} = req;
        const result = await heroCreateSchema.validate(body, { stripUnknown: true });
        next();
    } catch(error) {
        next(error);
    }
}