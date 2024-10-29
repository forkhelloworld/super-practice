const {pagination} = require("./pagination")
const upload = require("./multer");
const {getSuperPower} = require("./getSuperPower");
const { validateBody } = require("./validateBody");


module.exports = {
    pagination,
    upload,
    getSuperPower,
    validateBody
}