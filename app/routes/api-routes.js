// *********************************************************************************
// api-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var Orm = require("../config/Orm")
var express = require("../../node_modules/express")
var app = express()

// Routes
// =============================================================
module.exports = function(app) {


  app.post("/child/list", function(req, res) {
    res.json(Orm.list)
  });
  app.post("/child/records", function(req,res){
    res.json(Orm.listRecords)
  });
  // Retrieve child info
  app.post('/child/retrieve/:childName', function (req, res) {
  res.json(Orm.retrieve(childName));
  });

  


};