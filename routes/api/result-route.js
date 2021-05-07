const express = require("express");
const router = require("express").Router()
const resultController = require("../../controllers/resultsController");



router.post('/results', resultController.create);

router.get('/results/:id', resultController.findByID);

router.patch('/results/:id', resultController.update);

router.delete('/results/:id', resultController.delete);

// 3 other routes....

router.get('/results/latest', resultController.getNewest);




module.exports = router;