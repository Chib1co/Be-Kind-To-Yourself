const express = require("express");
const router = require("express").Router()
const activityController = require("../../controllers/activityController");



router.post('/activities', activityController.create);

router.get('/activities/:id', activityController.findByID);

router.patch('/activities/:id', activityController.update);

router.delete('/activities/:id', activityController.delete);




module.exports = router;