const express = require("express");
const router = require("express").Router()
const userController = require("../../controllers/usersController");
const passport = require("../../config/passport");

router.get('/users/', userController.findUser);

router.get('/users/:id', userController.findOne);

router.post('/users', userController.create);

router.patch('/users/:id', userController.update);

router.delete('/users/:id', userController.delete);



module.exports = router;