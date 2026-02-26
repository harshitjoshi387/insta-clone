const express = require('express')
const postRouter= express.Router()
const PostController= require('../controller/post.controller')
const multer= require("multer")
const upload = multer({storage:multer.memoryStorage})
postRouter.post("/",PostController)

module.exports = postRouter