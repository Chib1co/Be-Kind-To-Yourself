const express = require("express");
const auth = require("./api/auth/auth");
const user = ("./api/userRoutes");  



const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

router.use(AuthernticatedMiddleware)
router.use(user)
module.exports = router;
