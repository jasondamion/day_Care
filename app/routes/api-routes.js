// *********************************************************************************
// api-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var sequelize = require("../config/connection")
var express = require("../../node_modules/express")
var app = express()

// Routes
// =============================================================
module.exports = function(app) {

//List Children
  app.get("/child/list", function(req, res) {
    sequelize.query("Select * FROM children ORDER BY child_Name", { type: sequelize.QueryTypes.SELECT })
            .then(children => {
                console.log("List of children: \n" + JSON.stringify(children))
                res.json(children)
            })
  });

  //List Records
  app.get("/child/records", function(req,res){
    sequelize.query("Select * FROM timesheet ORDER BY date_today", { type: sequelize.QueryTypes.SELECT })
            .then(records => {
                console.log("The Records: \n" + JSON.stringify(records))
                res.json(records)
            })
  });

  // Retrieve child info
  app.get('/child/retrieve/:childName' , function (req, res) {
    sequelize.query("SELECT child_Name, guardian_Name,email,phone FROM children WHERE child_Name = ?", { replacements: [req.params.childName] }, { type: sequelize.QueryTypes.RAW })
            .then(result => {
                // console.log("Child Info \n" + JSON.stringify(result))
                res.json(result[0])
                // console.log(req.params)
                console.log(result[0])
            })
  });

  //Clock Child In
  app.get('/child/clock-in/:childName/:guardianName', function(req,res){
      sequelize.query("INSERT INTO timesheet(date_today,child_Name,guardian_Name,clock_in) VALUES(curdate(),?,?,curTime())", { replacements: [req.params.childName, req.params.guardianName] }, { type: sequelize.QueryTypes.INSERT })
          .then(result => {
              console.log( req.params.childName + " clocked in by " + req.params.guardianName)
              res.send(req.params.childName + " clocked in by " + req.params.guardianName + "<br/>" + "<a href = '/' ><button type = 'button' class = 'btn btn-secondary'>Go Back To Home</button></a>")
              
          })
  })

//Child Clock Out
  app.get('/child/clock-out/:childName/:guardianName', function(req,res){
    sequelize.query("UPDATE timesheet SET clock_out = curtime() , guardian_Name_Out = ? WHERE child_Name = ? AND date_today = curdate();", { replacements: [req.params.guardianName, req.params.childName] }, { type: sequelize.QueryTypes.UPDATE })
    .then(result => {
        console.log("Done updating timesheet")
        res.send(req.params.childName + " clocked out" + "<br/>" + "<a href = '/' ><button type = 'button' class = 'btn btn-secondary'>Go Back To Home</button></a>")
        
    })
})

//Add Child
app.get('/child/add/:childName/:guardianName/:email/:phone', function(req,res){
  sequelize.query("INSERT INTO children(date_added,child_Name,guardian_Name,email,phone) VALUES(curdate(),?,?,?,?)", { replacements: [req.params.childName, req.params.guardianName, req.params.email, req.params.phone] }, { type: sequelize.QueryTypes.INSERT })
            .then(result => {
                console.log("Child Added")
                res.send("Child Name: "+ req.params.childName +"<br/>Guardian Name: " + req.params.guardianName + "<br/>Email: " + req.params.email + "<br/>Phone: " + req.params.phone + "<br/>" + "<a href = '/' ><button type = 'button' class = 'btn btn-secondary'>Go Back To Home</button></a>")
                
              })
})

//Delete Child
app.get('/child/delete/:childName', function(req,res){
  sequelize.query("DELETE FROM children WHERE child_Name = ?", { replacements: [req.params.childName] }, { type: sequelize.QueryTypes.DELETE })
  .then(child => {
      console.log("Child Deleted")
      res.send(req.params.childName + " was deleted." + "<br/>" + "<a href = '/' ><button type = 'button' class = 'btn btn-secondary'>Go Back To Home</button></a>")
      
  })
})

//Attendence report by the name
app.get("/child/report/:childName", function(req,res){
  sequelize.query("Select * FROM timesheet WHERE child_Name = ? ORDER BY date_today", {replacements: [req.params.childName]}, { type: sequelize.QueryTypes.SELECT })
          .then(records => {
              console.log("The Records: \n" + JSON.stringify(records))
              res.json(records)
          })
});

//Attendence report by date
app.get("/child/report/date/:start/:end", function(req,res){
  sequelize.query("Select * FROM timesheet WHERE date_today BETWEEN ? AND ? ORDER BY date_today", {replacements: [req.params.start, req.params.end]}, { type: sequelize.QueryTypes.SELECT })
          .then(records => {
              console.log("The Records: \n" + JSON.stringify(records))
              res.json(records)
          })
})




  


};