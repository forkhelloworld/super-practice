const {Hero, SuperPower, HeroImage} = require("../models")

module.exports.createOne = async (req, res, next) => {
    try {
        const {body, file, powers} = req;
        const hero = await Hero.create(body);
        if (file) {
            const image = await hero.createHeroImage({imagePath: file.filename})
        }
        if (powers) {
            powers.forEach(async (power) => {
                await hero.addSuperPower(power)
            });
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
        res.status(200).send({data: {hero}});
    } catch (error) {
        next(error)
    }
}

module.exports.updateOne = async (req, res, next) => {
    try {
        const {body, file, params:{heroId}, powers} = req;
        let hero = await Hero.findByPk(+heroId);
        if (hero) {
            if (body){
                hero = await hero.update(body)
            }
            if (file) {
                const image = HeroImage.create({imagePath: file.filename});
                await hero.addHeroImage(image)
            };
    
            if (powers) {
                await hero.setSuperPowers(...powers);
            }
    
            res.status(200).send({data: {hero}});
        } 
        else {
            res.status(404).send("Not found")
        }
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
        res.status(200).send({data: {row}});
    } catch (error) {
        next(error)
    }
}



/* const {Hero, Superpower, HeroImages} = require('../models');


module.exports.createOne = async (req, res, next) => {
    try {
        const {body, file: {filename}, powers} = req;
        // image -> req.file
        console.log(body);
        const hero = await Hero.create(body);
        const image = await hero.createHeroImage({imagePath: filename});
        if (powers) {
            await Hero.addSuperpowers(powers);
        }
        res.status(201).send({data: hero})
    } catch(error) {
        next(error)
    }
}

module.exports.getAll = async (req, res, next) => {
    try {   
        const {pagination} = req;
        const heroes = await Hero.findAll({
            include: [{
                model: Superpower
            }], 
            ...pagination}); 
        res.status(200).send({data: heroes});
    } catch(error) {
        next(error)
    }
}


module.exports.getOne = async (req, res, next) => {
    try {
        const {params: {heroId}} = req;
        const hero = await Hero.findAll({
            where: {
                id: Number(heroId)
            },
            include: [{
                model: Superpower
            }]
        });
        res.status(200).send({data: hero})
    } catch(error) {
        next(error)
    }
}


module.exports.updateOne = async (req, res, next) => {
    try {
        // image -> req.file
        const {body, file: {filename}, params: {heroId}} = req;
        // image -> req.file
        const hero = await Hero.update(body, {
            where: {
                id: Number(heroId)
            }
        });
        if (filename) {
            const image = await HeroImage.create({imagePath: filename});
            hero.addHeroImage(image);
        }
        if (powers) {
            hero.addSuperpower(powers);
        }

        res.status(201).send({data: hero})
    } catch(error) {
        next(error)
    }
}


module.exports.deleteOne = async (req, res, next) => {
    try {
        const {params: {heroId}} = req;
        const del = await Hero.destroy({
            where: {
                id: Number(heroId)
            }
        });
        res.status(200).send({meta: {
            deleted: del
        }})
    } catch(error) {
        next(error)
    }
}
 */