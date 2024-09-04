const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('cd-test', 'cdadmin', '04X0skvHsl', {
  dialect: 'mysql',
  host: 'database-1.c7e08oiog885.us-west-2.rds.amazonaws.com',
  port: 3306,
})

// const testConnection = async () => { 
//   try {
//     await sequelize.authenticate()
//     console.log('Connection has been established successfully.')
//   } catch (error) {
//     console.error('Unable to connect to the database:', error)
//   }
// }
// testConnection()

module.exports = sequelize