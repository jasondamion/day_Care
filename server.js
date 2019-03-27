require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var path = require("path")
var passport = require("passport");
var session = require("express-session");

var app = express();
var PORT = process.env.PORT || 3000;

//db problem was fixed by naming startup file "index.js"
var db = require("./app/models");
var syncOptions = { force: false };

// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
require('./app/config/passport.js')(passport, db.User) //for user signin signup with passport

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/public",express.static(path.join(__dirname, "public")));

// Handlebars
app.engine("handlebars",exphbs({
    defaultLayout: "main",
    partialsDir: __dirname + "/views/partials"
  })
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Routes
require("./app/routes/html-routes")(app, passport);
require("./app/routes/api-routes")(app, passport);

//Syncing sequelize with database
db.sequelize.sync(syncOptions).then(function () {
  // Starting the server ------------------------------------/
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});


module.exports = app;

//How to link handlebar variables to javascript etc. How to get the id of something from the handlebar file and change it
//How to make the server look at daycare.js
//How to naviate object so I can select child name etc when retriving user from mysql
