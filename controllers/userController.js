const db = require("../models");

//define methods for user controller

module.exports = {
    findUser: async (req, res) => {
        try {
            const results = await db.User.find(req.params.email);
            return res.json(results)
        }
        catch (error) {
            return res.status(422).json(error)
        }
    },
};