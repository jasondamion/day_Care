// console.log("Successfully linked to the daycare model file");

// //Getting firebase started
// var dotenv = require('dotenv').config();

// //DEPENDENCIES//
// var sequelize = require("../config/connection.js");
// var Handlebars = require('handlebars');
// //DEPENDENCIES//

// //Gets all the dotenv keys
// // const result = dotenv;
 
// // if (result.error) {
// //   throw result.error
// // }
 
// // console.log(result.parsed)

// //View Children Button// DONE

// //Add child
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

//   //List all Users
// function list() {
//   sequelize.query("Select * FROM children",{type: sequelize.QueryTypes.SELECT})
//   .then(children =>{
//     console.log("List of children: \n"+JSON.stringify(children))
//     // var myinfo = "<h1>{{Name}}</h1> <p>{{Date_Added}}</p> <p>{{Guardian_Name}}</p> <p>{{Email}}</p> <p>{{Phone}}</p>"
//     // var template = Handlebars.compile(myinfo);
//     //     for (var i = 0; i <= children.length;i++){
//     // var Name = children[i].child_Name
//     // var Date_Added = children[i].date_added
//     // var Guardian_Name = children[i].guardian_Name
//     // var Email = children[i].email
//     // var Phone = children[i].phone
//     // var data = {Name:Name, Date_Added:Date_Added, Guardian_Name:Guardian_Name, Email:Email, Phone:Phone}
    
//     })
//   }
//   function listRecords(){
//   sequelize.query("Select * FROM timesheet",{type: sequelize.QueryTypes.SELECT})
// .then(records =>{
//   console.log("The Records: \n"+ JSON.stringify(records))
// })
//   }




// //Retrieve Users by Name
// function retrieve() {
// var childName = "Jason"
// sequelize.query("SELECT child_Name, guardian_Name,email,phone FROM children WHERE child_Name = ?",{replacements: [childName]},{type: sequelize.QueryTypes.RAW})
// .then(result =>{
//   console.log("Child Info \n" + JSON.stringify(result[0]))
// })
// }

// //Delete user function
// function deleted() {
// var childName = document.getElementById("childName")
// sequelize.query("DELETE FROM children WHERE child_Name = '?'", {replacements: {childName}},{type: sequelize.QueryTypes.DELETE})
// .then(child =>{
//   console.log("Child Deleted")
// })
// }
// //Clock in and out click functions

// // // Clock in
// function clockIn() {
// var childName = document.getElementById("childName")
// var guardianName = document.getElementById("guardianIn")
// sequelize.query("INSERT INTO timesheet(date_today,child_Name,guardian_Name,clock_in) VALUES(curdate(),?,?,curTime())",{replacements: [childName,guardianName]},{type: sequelize.QueryTypes.INSERT})
// .then(result =>{
//   console.log("Done updating timesheet")
// })
// }
// //Clock out
// function clockOut(){
// var childName = document.getElementById("childName")
// sequelize.query("UPDATE timesheet SET clock_out = curtime() WHERE child_Name = ?",{replacements: [childName]},{type: sequelize.QueryTypes.UPDATE})
// .then(result =>{
//   console.log("Done updating timesheet")
// })
// }