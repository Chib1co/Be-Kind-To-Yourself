const express = require("express");
const auth = require("./api/auth/auth");
const user = require("./api/user-api-routes");
const results = require("./api/result-route");
const activities = require("./api/activity-route");
const path = require("path");
// const AuthenticatedMiddleware = require("./../middleware/AuthenticatedMiddleware");


const router = require("express").Router();
// const apiRoutes = require("./api");

router.use("/auth", auth);
// router.use(AuthenticatedMiddleware);
router.use("/users", user);
router.use("/results", results);
router.use("/activities", activities);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  console.log("no route hit")
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});


  
module.exports = router;
