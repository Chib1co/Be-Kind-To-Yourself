const express = require("express");
const User = require("./../../models/User");
const router = express.Router();


router.get("/users", (req, res) => {
    User.find({}).then((results) => {
        res.json({
            data: results,
        })
    })
});

router.get("./users/:id", (req, res) => {
    User.findById(req.params.id).then((result) => {
        res.json({
            data: result,
        })
    })
});

router.post("/users", (req, res) => {
    User.create(req.body).then((created) => {
        res.json({
            data: created
        })
    })
});

router.patch("")