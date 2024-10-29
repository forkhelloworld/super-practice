const {SuperPower} = require("../models");

module.exports.getSuperPower = async (req, res, next) => {
    try {
        let {body: {powers}} = req;
        if (powers){
            powers = powers.split(",")
            const superPowers = [];
            for (const name of powers) {
                let power = await SuperPower.findAll({
                    where: {
                        name
                    }
                });
                if (!power.length) {
                    power = await SuperPower.create({name});
                };
                superPowers.push(...power)
            }
        console.log(superPowers);
        req.powers = superPowers;
        }
        next();
    } catch (error) {
        next(error) 
    }
}