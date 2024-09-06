const jwt = require('jsonwebtoken')
require('dotenv').config()

const DEFAULT_ACCESS_TOKEN_EXPIRATION = '60m'
const DEFAULT_REFRES_TOKEN_EXPIRATION = '1d'

const createAccessToken = (username, expiration = DEFAULT_ACCESS_TOKEN_EXPIRATION) => 
  jwt.sign(
    { username },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: expiration}
  )

const createRefreshToken = (username, expiration = DEFAULT_REFRES_TOKEN_EXPIRATION) =>
  jwt.sign(
    { username },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: expiration}
  )

module.exports = {
  createAccessToken,
  createRefreshToken
} 