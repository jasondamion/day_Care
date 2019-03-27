// *********************************************************************************
// api-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app, passport) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/api/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/land.html"));
  });
  
  //User routes
  //Sign in
  app.post("/signin", passport.authenticate('local-signin', {
    //redirects work like app.get("route")
    successRedirect: "/",
    failureRedirect: "/",
  }
  ));

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: "/",
    failureRedirect: "/",
  }
  ));
};