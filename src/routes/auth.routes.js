const express = require("express")
const userModel = require('../model/user.model')
const authController= require("../controller/auth.controller")

const authRouter = express.Router()
const crypto = require("crypto")
const jwt = require("jsonwebtoken")


authRouter.post("/register",authController.registerController)
authRouter.post("/login",authController.loginController)
module.exports = authRouter