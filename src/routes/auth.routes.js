const express = require('express');
const authRouter = express.Router();
const {registerController, loginController} = require("../controllers/auth.controller");

/**
 * POST /register
 * POST /login
 * GET /user [protected]
 */

authRouter.post("/register", registerController);
authRouter.post("/login", loginController);

module.exports = authRouter;