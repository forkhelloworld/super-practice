const NotFoundError = require("../errors/NotFoundError");
const {Hero, SuperPower, HeroImage} = require("../models")

module.exports.createOne = async (req, res, next) => {
    try {
        const {body, file, powers} = req;
        const hero = await Hero.create(body);
        if (file) {
            const image = await hero.createHeroImage({imagePath: file.filename})
        }
        if (powers) {
            await hero.setSuperPowers(powers)
        }
        res.status(201).send({data:{hero}})
    } catch (error) {
        next(error);
    }
}

module.exports.getAll = async (req, res, next) => {
    try {
        const {pagination} = req;
        const heroes = await Hero.findAll({
            include: [{
                model:SuperPower
            }],
            ...pagination});
        res.status(200).send({data:{heroes}})
    } catch (error) {
        next(error)
    }
}
 
module.exports.getOne = async (req, res, next) => {
    try {
        const {params:{heroId}} = req;
        const hero = await Hero.findAll({
            where:{
                id: +heroId
            },
            include: [{
                model:SuperPower
            }],
        });
        if (hero.length){   
            res.status(200).send({data: {hero}});
        } else {
            throw new NotFoundError("Hero")
        }
    } catch (error) {
        next(error)
    }
}

module.exports.updateOne = async (req, res, next) => {
    try {
        const {body, file, params:{heroId}, powers} = req;
        let hero = await Hero.findByPk(+heroId);
        if (!hero) {
            throw new NotFoundError("Hero")
        } 
        if (body){
            hero = await hero.update(body)
        }
        if (file) {
            const image = HeroImage.create({imagePath: file.filename});
            await hero.setHeroImage(image)
        };

        if (powers) {
            await hero.setSuperPowers(powers);
        }

        res.status(200).send({data: {hero}});


    } catch (error) {
        next(error)
    }
}

module.exports.deleteOne = async (req, res, next) => {
    try {
        const {params:{heroId}} = req;
        const row = await Hero.destroy({
            where:{
                id: +heroId
            }
        });
        if (row) {
            res.status(200).send({data: {row}});
        } else {
            throw new NotFoundError("Hero")
        }
    } catch (error) {
        next(error)
    }
}