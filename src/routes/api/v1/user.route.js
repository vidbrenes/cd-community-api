const express = require('express')
const verifyJWT = require('../../../middlewares/jwt')
const { getAllUsers, getUser, createUser, updateUser, deleteUser } = require('../../../controllers/user.controller')

const router = express.Router()

router.route('/')
  .get(verifyJWT, getAllUsers)
  .post(createUser)
  .patch((req, res) => updateUser)
  .delete((req, res) => deleteUser)

router.get('/:userId', getUser)

module.exports = router