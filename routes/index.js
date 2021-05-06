const express = require("express");
const auth = require("./api/auth/auth");
const user = require("./api/user-api-routes");
const chart = require("./api/chart-route.js");
const check = require("./api/test-check-result");
const dayByday = require("./api/today-route");
const AuthenticatedMiddleware = require("./../middleware/AuthenticatedMiddleware");


const router = require("express").Router();
// const apiRoutes = require("./api");


router.use(AuthenticatedMiddleware )
router.use(user)
router.use(chart)
router.use(check)
router.use(dayByday)
// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

  
module.exports = router;
