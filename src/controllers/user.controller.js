const User = require('../models/user.model')
const userService = require('../services/user.service')
const { generatePasswordHash, isPasswordMatch } = require('../utils/encryption')

const getAllUsers = async (req, res) => {
  const allUsers = await userService.getAllUsers()
  res.send({ status: 'OK', data: allUsers })
}

const getUser = async (req, res) => {
  const user = await userService.getUser(req.params.userId)

  if (user === null) {
    res.status(400).send({ status : 'NOT_FOUND', data: null })
  }

  res.send({ status: 'OK', data: user })
}

const createUser = async (req, res) => {
  const {
    firstName,
    lastName,
    username,
    password
  } = req.body

  if (!firstName ||
    !lastName ||
    !username ||
    !password
  ) {
    res.status(400).send({ error: 'Invalid params' })
  }

  const hashedPassword = await generatePasswordHash(password)

  try {
    const createdUser = await userService.createUser({
      firstName,
      lastName,
      username,
      password: hashedPassword
    })

    res.status(201).send({
      status: 'OK',
      data: createdUser
    })
  } catch (error) {
    console.log('CATCH', error)
    res.status(400).send({
      status: 'ERROR',
      message: error.message
    })
  }
}

const updateUser = (req, res) => {
  const updatedUser = userService.updateUser()
  res.send('Update an existing user')
}

const deleteUser = (req, res) => {
  userService.deleteUser()
  res.send('Soft delete an existing user')
}

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}