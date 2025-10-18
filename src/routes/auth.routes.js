const express = require('express');
const userModel = require('../models/user.model.js');

const authRouter = express.Router();

/**
 * POST /register
 * POST /login
 * GET /user [protected]
 */

authRouter.post("/register", async (req, res) =>{
    const {username, password} = req.body;

    const user= await userModel.create({
        username,
        password
    })

    res.status(201).json({message : "User Created Successfully", user});
})

module.exports = authRouter;