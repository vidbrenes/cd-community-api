const express = require('express')
const { getAllUsers, getUser, createUser, updateUser, deleteUser } = require('../../controllers/user.controller')

const router = express.Router()

router.get('/', getAllUsers)

router.get('/:userId', getUser)

router.post('/', createUser)

router.patch('/', (req, res) => updateUser)

router.delete('/', (req, res) => deleteUser)

module.exports = router