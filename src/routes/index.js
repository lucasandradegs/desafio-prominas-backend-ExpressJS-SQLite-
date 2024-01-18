const { Router } = require("express")

const briefRoutes = require("./brief.routes")

const routes = Router()

routes.use("/brief", briefRoutes)

module.exports = routes;