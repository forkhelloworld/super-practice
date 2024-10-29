const heroRouter = require("express").Router();
const HeroController = require('../controllers/HeroController');
const {pagination, getSuperPower, upload} = require("../middlewares/import")


heroRouter.post("/", upload.single("image") , getSuperPower ,HeroController.createOne);
heroRouter.get("/", pagination, HeroController.getAll);
heroRouter.get("/:heroId", HeroController.getOne);
heroRouter.put("/:heroId", upload.single("image"), getSuperPower, HeroController.updateOne);
heroRouter.delete("/:heroId", HeroController.deleteOne);

module.exports = heroRouter;