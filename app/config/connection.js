var mysql = require('mysql');
var Sequelize = require("sequelize")
var dotenv = require("dotenv").config();

//Gets all the dotenv keys
// const result = dotenv;
 
// if (result.error) {
//   throw result.error
// }
 
// console.log(result.parsed)

var sequelize = new Sequelize(process.env.mysqlData, process.env.mysqlUser, process.env.mysqlPass, {
  host: process.env.mysqlHost,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
})
//View all Children
// sequelize.query("Select * FROM children",{type: sequelize.QueryTypes.SELECT})
// .then(children =>{
//   console.log("The children are: \n"+ JSON.stringify(children))
// })

// Add a child
// var childName = "Jason"
// var guardianName = "Muriel Page"
// var email = "jasonnelson11@gmail.com"
// var phone = 3477929311
// sequelize.query("INSERT INTO children(date_added,child_Name,guardian_Name,email,phone) VALUES(curdate(),?,?,?,?)",{replacements: [childName,guardianName,email,phone]},{type: sequelize.QueryTypes.INSERT})
// .then(result =>{
//   console.log("Child Added")
// })

//Delete Child
// sequelize.query("DELETE FROM children WHERE child_Name = 'Jason'",{type: sequelize.QueryTypes.DELETE})
// .then(children =>{
//   console.log("Child Deleted")
// })

// // Clock in
// var childName = "Jason"
// var guardianName = "Muriel Page"
// sequelize.query("INSERT INTO timesheet(date_today,child_Name,guardian_Name,clock_in) VALUES(curdate(),?,?,curTime())",{replacements: [childName,guardianName]},{type: sequelize.QueryTypes.INSERT})
// .then(result =>{
//   console.log("Done updating timesheet")
// })

//Clock out
// var childName = "Jason"
// var guardianName = "Muriel Page"
// sequelize.query("UPDATE timesheet SET clock_out = curtime() WHERE child_Name = ?",{replacements: [childName]},{type: sequelize.QueryTypes.UPDATE})
// .then(result =>{
//   console.log("Done updating timesheet")
// })

//Retrieve User
// var childName = "Jason"
// var guardianName = "Muriel Page"
// var email = "jasonnelson11@gmail.com"
// var phone = 3477929311
// sequelize.query("SELECT child_Name, guardian_Name,email,phone FROM children WHERE child_Name = ?",{replacements: [childName]},{type: sequelize.QueryTypes.RAW})
// .then(result =>{
//   console.log("Child Info \n" + JSON.stringify(result[0]))
// })

// date_today DATE,
// child_Name VARCHAR(70),
// guardian_Name VARCHAR(70),
// clock_in TIME,
// clock_out TIME,

// Exports the connection for other files to use
module.exports = sequelize;




