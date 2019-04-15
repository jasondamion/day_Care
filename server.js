var dotenv = require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var path = require("path")

var app = express();
var PORT = process.env.PORT || 3000;

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
require("./app/routes/html-routes")(app);
require("./app/routes/api-routes")(app);




// Starting the server ------------------------------------/
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });


module.exports = app;

//How to link handlebar variables to javascript etc. How to get the id of something from the handlebar file and change it
//How to naviate object so I can select child name etc when retriving user from mysql
