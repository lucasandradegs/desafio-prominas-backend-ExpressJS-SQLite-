const knex = require("../database/knex")

class BriefController {
    async create(req, res) {
        const { name, course, feedback } = req.body

        await knex("brief").insert({
            name, 
            course,
            feedback
        })

        return res.status(201).json(`Depoimento cadastrado com sucesso`)
    }

    async show(req, res) {
        const { id } = req.params

        const brief = await knex("brief").where({ id }).first()

        return res.status(201).json(brief.feedback)
    }
}

module.exports = BriefController;