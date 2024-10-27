const apiRouter = require("express").Router();

const heroRouter = require('./superHero');

apiRouter.use("/hero", heroRouter)