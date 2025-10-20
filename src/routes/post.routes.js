const express = require('express');
const postRouter = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const { createPostController } = require('../controllers/post.controller');
const multer = require("multer");

const upload = multer({storage : multer.memoryStorage()})

postRouter.post("/", authMiddleware, 
    upload.single("image"),
    createPostController);

module.exports = postRouter;