const { Router } = require("express")
const BriefController = require("../controller/BriefController")

const briefController = new BriefController();
const briefRoutes = Router()

briefRoutes.post("/", briefController.create)
briefRoutes.get("/:id", briefController.show)

module.exports = briefRoutes
