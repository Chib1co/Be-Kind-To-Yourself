const express = require("express");
const passport = require("./../../../config/passport");
const validator = requiire("validator");
const User = require("./../../../models/User");

const router = express.Router();

router.post("./resister", (req, res, next) => {
    const validationErrors = [];
})