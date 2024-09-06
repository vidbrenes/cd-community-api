const express = require('express')
const { login } = require('../controllers/auth.controller')

const router = express.Router()

router.post('/login', login)

// TODO Implement refresh token
// router.get('/auth/refresh', refreshToken)

module.exports = router