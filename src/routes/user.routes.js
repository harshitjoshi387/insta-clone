const express = require('express')
const userController = require("../controller/user.controller")

const userRouter = express.Router()

/**
 * @route POST /api/follow/:userid
 * @description follow a user
 * @access private
 */
userRouter.post("/follow/:userid")



module.exports= userRouter