const express = require('express')
const router = express.Router()
const login = require('../api/controller/login')
router.get('/login',login.login)


module.exports = router