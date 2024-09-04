const User = require('../models/user.model')

const getAllUsers = async () => {
  const allUsers = await User.findAll()
  return allUsers
}

const getUser = async (id, showSensitiveInfo = false) => {
  let user

  if (showSensitiveInfo) {
    user = await User.scope('withSensitiveInfo').findOne({ where: { id } })
    return user
  }
  
  user = await User.findOne({ where: { id } })

  return user
}

const getUserByUsername = async (username, showSensitiveInfo = false) => {
  let user

  if (showSensitiveInfo) {
    user = await User.scope('withSensitiveInfo').findOne({ where: { username } })
    return user
  }
  
  user = await User.findOne({ where: { username } })

  return user
}

const createUser = async (userData) => {
  const newUser = await User.create({...userData})

  // This is important cause scopes, even defaultScope don't apply here
  newUser.dataValues.password = undefined

  return newUser
}

const updateUser = (req, res) => {
  return
}

const deleteUser = (req, res) => {
  return
}

module.exports = {
  getAllUsers,
  getUser,
  getUserByUsername,
  createUser,
  updateUser,
  deleteUser
}