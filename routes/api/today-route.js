const router = require("express").Router()
const activityController = require("../../controllers/activityController")
const resultController = require("../../controllers/resultsController");
const passport = require("./../../config/passport");

router.route("/today/:id")
.get(resultController.findByID)
.post(activityController.create)

module.exports = router;
