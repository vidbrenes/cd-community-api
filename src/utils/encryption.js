const bcrypt = require('bcryptjs')

const generatePasswordHash = async (password, salt = 10) => {
  const hash = await bcrypt.hash(password, salt)
  return hash
}

const isPasswordMatch = async (password, hash) => {
  return await bcrypt.compareSync(password, hash)
}

module.exports = {
  generatePasswordHash,
  isPasswordMatch
}