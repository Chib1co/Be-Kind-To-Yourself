const express = require("express");
const router = require("express").Router()
const resultController = require("../../controllers/resultsController");



router.post('/', resultController.create);
router.get('/', resultController.findAll)
router.get('/latest', resultController.getNewest);
router.get('/current-user', resultController.currentUserResult);
router.get('/:id', resultController.findByID);


router.patch('/:id', resultController.update);

router.delete('/:id', resultController.delete);



module.exports = router;