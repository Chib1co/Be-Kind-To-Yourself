const router = require("express").Router()
const resultController = require("../../controllers/resultsController");

router 
.route("./id")
.get(resultController.findByID)

module.exports = router;