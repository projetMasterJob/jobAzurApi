require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  dialect: 'mysql', // ou 'sqlite' ou autre selon ce que tu utilises
});

const User = require('./UserModel')(sequelize, DataTypes);
const Company = require('./CompanyModel')(sequelize, DataTypes);
const Job = require('./JobModel')(sequelize, DataTypes);
const Location = require('./LocationModel')(sequelize, DataTypes);
const Application = require('./ApplicationModel')(sequelize, DataTypes);
const Notification = require('./NotificationModel')(sequelize, DataTypes);
const Chat = require('./ChatModel')(sequelize, DataTypes);
const Message = require('./MessageModel')(sequelize, DataTypes);

module.exports = {
  sequelize,
  Sequelize,
  User,
  Company,
  Job,
  Location,
  Application,
  Notification,
  Chat,
  Message
};
