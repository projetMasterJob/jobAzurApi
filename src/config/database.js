require("dotenv").config();

module.exports = {
  dialect: "mysql", // ou "postgres", "sqlite", "mariadb" selon ton cas
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306, // ajuste selon le SGBD
  logging: false, // active si tu veux voir les requêtes SQL
};
