const express = require("express");
const activityController = require("../../controllers/activityController");
const router = require("express").Router()
const resultController = require("../../controllers/resultsController");
const passport = require("./../../config/passport");

router.route("/chart/:id")
.get(resultController.findByID)
.post(activityController.create)

module.exports = router;
