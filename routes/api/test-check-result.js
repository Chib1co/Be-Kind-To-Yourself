const express = require("express");
const router = require("express").Router()
const resultController = require("../../controllers/resultsController");
const passport = require("./../../config/passport");

router.route("/instantresult")
.get(resultController.getNewest)
.post(resultController.create)

module.exports = router;