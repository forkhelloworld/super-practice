const heroRouter = require("express").Router();

heroRouter.post("/");
heroRouter.get("/");
heroRouter.get("/:heroId");
heroRouter.put("/:heroId");
heroRouter.delete("/:heroId");

module.exports = heroRouter;