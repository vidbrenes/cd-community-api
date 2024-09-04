const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
}, {
  defaultScope: {
    attributes: {
      exclude: ['password',]
    }
  },
  scopes: {
    withSensitiveInfo: {
      attributes: {
        include: ['password']
      }
    }
  }
})

module.exports = User
