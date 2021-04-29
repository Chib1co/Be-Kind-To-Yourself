const db = require('../models');

module.exports = {
    //find all saved results by id
    findByID: async(req, res) => {
        try{
            const results = await db.Results.find(req.params.id);
            return res.json(results)
        }
        catch(error) {
            return res.status(422).json(error)
        }
    },

    //create, save new result in db
    create: async(req, res) => {
        try{
            const result = await db.Results.create(req.body);
            return res.json(result)
        } catch(error) {
            return res.status(422).json(error)
        }
    },

};