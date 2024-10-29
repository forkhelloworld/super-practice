const yup = require('yup');


module.exports.heroCreateSchema = yup.object({
    nickname: yup.string().required().min(1),
    realName: yup.string(),
    originDescription: yup.string(),
    catchPhrase: yup.string(),
    powers: yup.string()
});