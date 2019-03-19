//Getting firebase started
var admin = require("firebase-admin");
require('dotenv').config();

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: x,
    clientEmail: x,
    privateKey: x
  }),
  databaseURL: "https://daycare-46f7a.firebaseio.com",
});

console.log("Successfully linked to the daycare model file");
//DEPENDENCIES//
var sequelize = require("../config/connection.js");
var moment = require('moment');
moment().format();
//DEPENDENCIES//


//VARIABLES//

//VARIABLES FOR ADD MODAL
var uidAddModal;
var emailAddModal;
var phoneAddModal;
var submitAddModal = document.getElementById("submitAddModal")
//VARIABLES FOR VIEWING CHILDREN MODAL
var kidsViewingPoint = document.getElementById("addKidsHere")
var viewChildrenButton = document.getElementById("vacbutton")
//VARIABLES FOR RETRIEVING A CHILD
var uidVal;
var reUID = document.getElementById("reUID")
var childName;
var childEmail;
var childPhone;
//VARIABLES FOR DELETING A CHILD IN RETRIEVE MODAL//
var deleteChild = document.getElementById("deleteChild")
var dchildName;
//VARIABLES FOR THE CLOCK IN FUNCTION//
var clock_in = document.getElementById("clock-in")
var clock_out = document.getElementById("clock-out")
var guardian;

//Function for clocking them in and out
function clock(check_in, CchildName) {
  if (check_in === "in" || check_in === "In") {
    var time = moment();
    guardian = document.getElementById("guardianIn").value
    sequelize.query("INSERT INTO clock (date_today,child_Name,guardian_Name,clock_in) VALUES('" + time + "','" + CchildName + "','" + guardian + "','" + check_in + "')'", function(err){
    if (err){
      console.log("An error occured trying to clock child in");
     } 
     else{
     console.log('success, database updated');
    } 
  });
  }
  else {
    var time = moment();
    guardian = document.getElementById("guardianOut")
    sequelize.query("INSERT INTO clock (date_today,child_Name,guardian_Name,clock_out) VALUES('" + time + "','" + CchildName + "','" + guardian + "','" + check_in + "')'", function(err){
      if (err){
        console.log("an error ocurred trying to clock child out")
       } 
       else{
        console.log('success, database updated');
       } 
      });
    }
}

//Add user function //DONE
__________________________________________________________________
alert("Before the submit button")

submitAddModal.onclick(function () {
  alert("Submit button clicked");
  uidAddModal = document.getElementById("uidValAddModal").value
  emailAddModal = document.getElementById("emailValAddModal").value
  phoneAddModal = document.getElementById("phoneValAddModal").value
  admin.auth().createUser({
    uid: uidAddModal,
    email: emailAddModal,
    phoneNumber: phoneAddModal
  })
    .then(function (userRecord) {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log("Successfully created new user:", userRecord.uid);
    })
    .catch(function (error) {
      console.log("Error creating new user:", error);
    });
});

//View Children Button// DONE

viewChildrenButton.onclick(function () {
  alert("View Children button clicked");
  //List all Users
  function listAllUsers(nextPageToken) {
    // List batch of users, 1000 at a time.
    admin.auth().listUsers(1000, nextPageToken)
      .then(function (listUsersResult) {
        listUsersResult.users.forEach(function (userRecord) {
          console.log("user", userRecord.toJSON());
          $(kidsViewingPoint).append(userRecord.toJSON())
        });
        if (listUsersResult.pageToken) {
          // List next batch of users.
          listAllUsers(listUsersResult.pageToken)
        }
      })
      .catch(function (error) {
        console.log("Error listing users:", error);
      });
  }
});

//Retrieve Users by Name

reUID.onclick(function () {
    uidVal = document.getElementById("uidVal").value
    admin.auth().getUser(uidVal)
      .then(function (userRecord) {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log("Successfully fetched user data:", userRecord.toJSON());
        childName = document.getElementById("childName").value(userRecord.uid)
        childEmail = document.getElementById("childEmail").value(userRecord.email);
        childPhone = document.getElementById("childPhone").value(userRecord.phoneNumber);
      })
      .catch(function (error) {
        console.log("Error fetching user data:", error);
      });
  });

//Delete user function

deleteChild.onclick(function() {
  dchildName = document.getElementById("uidVal").value;
  admin.auth().deleteUser(dchildName)
    .then(function () {
      console.log("Successfully deleted user");
    })
    .catch(function (error) {
      console.log("Error deleting user:", error);
    });
})

//Clock in and out click functions
__________________________________________________________________
clock_in.onclick(function () {
  guardian = document.getElementById("guardianIn").value
  kidName = document.getElementById("uidVal").value
clock("In",kidName);
})
$(clock_out).click(function () {
  guardian = document.getElementById("guardianOut").value
  kidName = document.getElementById("uidVal").value
clock("Out", kidName);
})