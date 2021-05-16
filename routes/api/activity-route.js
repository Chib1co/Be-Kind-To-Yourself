const express = require("express");
const router = require("express").Router()
const activityController = require("../../controllers/activityController");
// const AuthenticatedMiddleware = require("../../middleware/AuthenticatedMiddleware")

// router.use(AuthenticatedMiddleware);

router.post('/', activityController.create);

router.get('/:id', activityController.findByID);

router.patch('/:id', activityController.update);

router.delete('/:id', activityController.delete);




module.exports = router;