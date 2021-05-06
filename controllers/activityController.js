const db = require("../models");

module.exports = {
    findByID: async (req, res) => {
        try {
            const results = await db.Activity.find(req.params.id);
            return res.json(results)
        }
        catch (error) {
            return res.status(422).json(error)
        }
    },
     //create, save new result in db
     create: async (req, res) => {
        try {
            const result = await db.Activity.create(req.body);
            return res.json(result)
        } catch (error) {
            return res.status(422).json(error)
        }
    },
};