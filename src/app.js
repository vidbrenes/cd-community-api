const express = require('express')
// const bodyParser = require('body-parser')
const v1UserRouter = require('./routes/api/v1/user.route')
const authRouter = require('./routes/auth.route')
const sequelize = require('./config/db')
// const { User } = require('./models/user.model') 

const app = express()
const PORT = process.env.PORT || 3000
const API_PATH = '/api'
const API_V1_PATH = '/api/v1'

// app.use(bodyParser.urlencoded({extended: false})) 
// app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// ROUTES
app.use(`${API_PATH}/auth`, authRouter)
// ADD AUTHORIZATION MIDDLEWARE
app.use(`${API_V1_PATH}/users`, v1UserRouter)

// DB INTIALIZATION
// sequelize.sync({ force: true }).then(result => {
sequelize.sync().then(result => {
  console.log('DB result: ', result)

  app.listen(PORT, ()  => {
    console.log(`Server is up on port ${PORT}`)
  })
}).catch(err => {
  console.log('DB err: ', err)
})

// app.listen(PORT, () => {
//   console.log(`Server is up on port ${PORT}`)
// })