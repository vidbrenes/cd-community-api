const { getUserByUsername } = require('../services/user.service')
const { isPasswordMatch } = require('../utils/encryption')
const { createAccessToken, createRefreshToken } = require('../utils/jwt.util')

const REFRESH_TOKEN_MAX_AGE = 24 * 60 * 60 * 1000
const REFRESH_TOKEN_COOKIE_NAME = 'jwt'

const login = async (req, res) => {
  const { username, password } = req.body

  if (!username || !password) return res.sendStatus(401) 
    
  try {
    const user = await getUserByUsername(username, true)

    if (!user || !isPasswordMatch(password, user?.password)) {
      return res.sendStatus(401)
    }

    const accessToken = createAccessToken(username)
    const refreshToken = createRefreshToken(username)

    // TODO SAVE REFRESH TOKEN IN DB

    // FOR SECURITY SAKE, FRONTEND SHOULD SAVE THIS TOKEN IN MEMORY (NOT LOCAL/SESSION STORAGE OR COOKIES)
    res.cookie(REFRESH_TOKEN_COOKIE_NAME, refreshToken, { httpOnly: true, maxAge: REFRESH_TOKEN_MAX_AGE })
    res.json({ accessToken })
  } catch (error) {
    // TODO LOG ERROR
    console.log(error)
    res.sendStatus(401)
  }
}

module.exports = {
  login
}
