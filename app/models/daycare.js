console.log("Successfully linked to the daycare model file");

//Getting firebase started
var dotenv = require('dotenv').config();

//DEPENDENCIES//
var sequelize = require("../config/connection.js");
var Handlebars = require('handlebars');
//DEPENDENCIES//
var router = express.Router();


console.log("Works after dependencies")


//Add child
// function add(){
// var childName = "Jason"
// //document.getElementById("nameValAddModal")
// var guardianName = "Muriel Page"
// //document.getElementById("guardianValAddModal")
// var email = "jasonnelson11@gmail.com"
// //document.getElementById("emailValAddModal")
// var phone = 3477929311
// //document.getElementById("phoneValAddModal")
// sequelize.query("INSERT INTO children(date_added,child_Name,guardian_Name,email,phone) VALUES(curdate(),?,?,?,?)",{replacements: [childName,guardianName,email,phone]},{type: sequelize.QueryTypes.INSERT})
// .then(result =>{
//   console.log("Child Added")
// })
// }

// console.log("Works after add method")



  //List all Users
// function list() {
//   sequelize.query("Select * FROM children",{type: sequelize.QueryTypes.SELECT})
//   .then(children =>{
//     console.log("List of children: \n"+JSON.stringify(children))
//     })
//   }
//   function listRecords(){
//   sequelize.query("Select * FROM timesheet",{type: sequelize.QueryTypes.SELECT})
// .then(records =>{
//   console.log("The Records: \n"+ JSON.stringify(records))
// })
//   }




//Retrieve Users by Name
// function retrieve() {
// var childName = "Jason"
// sequelize.query("SELECT child_Name, guardian_Name,email,phone FROM children WHERE child_Name = ?",{replacements: [childName]},{type: sequelize.QueryTypes.RAW})
// .then(result =>{
//   console.log("Child Info \n" + JSON.stringify(result[0]))
// })
// }

//Delete user function
// function deleted() {
// var childName = document.getElementById("childName")
// sequelize.query("DELETE FROM children WHERE child_Name = '?'", {replacements: {childName}},{type: sequelize.QueryTypes.DELETE})
// .then(child =>{
//   console.log("Child Deleted")
// })
// }

console.log("Works before clock in/out functions")
//Clock in and out click functions

// // Clock in
// function clockIn() {
// var childName = document.getElementById("childName")
// var guardianName = document.getElementById("guardianIn")
// sequelize.query("INSERT INTO timesheet(date_today,child_Name,guardian_Name,clock_in) VALUES(curdate(),?,?,curTime())",{replacements: [childName,guardianName]},{type: sequelize.QueryTypes.INSERT})
// .then(result =>{
//   console.log("Done updating timesheet")
// })
// }
//Clock out
// function clockOut(){
// var childName = document.getElementById("childName")
// sequelize.query("UPDATE timesheet SET clock_out = curtime() WHERE child_Name = ?",{replacements: [childName]},{type: sequelize.QueryTypes.UPDATE})
// .then(result =>{
//   console.log("Done updating timesheet")
// })
// }

console.log("Works after whole file")
