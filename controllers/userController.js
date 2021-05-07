const dbUser = require("../models/User");

//define methods for user controller

module.exports = {
    findUser: async (req, res) => {
        dbUser.find({})
            .then((results) => {
                res.json({
                    data: results,
                })
            })
    },
    findOne: async (req, res) => {
        dbUser.findById(req.params.id)
            .then((result) => {
                res.json({
                    data: result
                })
            })
    },

    crete: async (req, res) => {
        dbUser.create(req.body)
            .then((created) => {
                res.json({
                    data: created
                })
            })
    },

    update: async (req, res) => {
        dbUser.findByIdAndUpdate(req.params.id, {
            $push: {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: req.body.password,
            },
        },
            { new: true })
            .then((updated) => {
                res.json({
                    data: updated
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
    },

    delete: async (req, res) => {
        dbUser.findByIdAndDelete(req.params.id)
        .then((deleted) => {
            res.json({
                data: deleted,
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        }) 
    }




};