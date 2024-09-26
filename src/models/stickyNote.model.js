const { Sequelize, DataTypes } = require('sequelize');  
const sequelize = require('../config/db');

const StickyNote = sequelize.define('StickyNote', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  collectionId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  colorTheme: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'default'
  },
  positionX: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  positionY: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  }
})

module.exports = StickyNote