
// Dependencies
var Sequelize = require("sequelize");
require('dotenv').config();

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("dayCare_db", "root", process.env.mysqlPass, {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;



