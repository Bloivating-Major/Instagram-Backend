const express = require('express');
const authRouter = express.Router();
const {registerController} = require("../controllers/auth.controller");

/**
 * POST /register
 * POST /login
 * GET /user [protected]
 */

authRouter.post("/register", registerController);

module.exports = authRouter;