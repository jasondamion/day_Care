//Getting firebase started
var admin = require("firebase-admin");
var serviceAccount = require("firebaseInfo.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://daycare-46f7a.firebaseio.com"
});

__________________________________________________________________

//DEPENDENCIES//
var sequelize = require("../config/connection.js");
//DEPENDENCIES//

__________________________________________________________________

//VARIABLES//

//VARIABLES FOR ADD MODAL
var uidAddModal = $("#uidValAddModal").val();
var emailAddModal = $("#emailValAddModal").val();
var phoneAddModal = $("#phoneValAddModal").val();
var submitAddModal = $("#submitAddModal");
//VARIABLES FOR VIEWING CHILDREN MODAL
var kidsViewingPoint = $("#addKidsHere");
var viewChildrenButton = $("#vacbutton");

//VARIABLES//

__________________________________________________________________
alert("Before the submit button")
$( submitAddModal ).click(function() {
  alert( "Submit button clicked" );

//Add user function
admin.auth().createUser({
    uid: uidAddModal,
    email: emailAddModal,
    phoneNumber: phoneAddModal
  })
    .then(function(userRecord) {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log("Successfully created new user:", userRecord.uid);
    })
    .catch(function(error) {
      console.log("Error creating new user:", error);
    });
});

//Delete user function
admin.auth().deleteUser(uid)
  .then(function() {
    console.log("Successfully deleted user");
  })
  .catch(function(error) {
    console.log("Error deleting user:", error);
  });

//Update User 
admin.auth().updateUser(uid, {
    email: "modifiedUser@example.com",
    phoneNumber: "+11234567890",
    emailVerified: true,
    password: "newPassword",
    displayName: "Jane Doe",
    photoURL: "http://www.example.com/12345678/photo.png",
    disabled: true
  })
    .then(function(userRecord) {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log("Successfully updated user", userRecord.toJSON());
    })
    .catch(function(error) {
      console.log("Error updating user:", error);
    });

$( viewChildrenButton ).click(function() {
alert( "View Children button clicked" );  
//List all Users
function listAllUsers(nextPageToken) {
    // List batch of users, 1000 at a time.
    admin.auth().listUsers(1000, nextPageToken)
      .then(function(listUsersResult) {
        listUsersResult.users.forEach(function(userRecord) {
          console.log("user", userRecord.toJSON());
          $(kidsViewingPoint).append(userRecord.toJSON())
        });
        if (listUsersResult.pageToken) {
          // List next batch of users.
          listAllUsers(listUsersResult.pageToken)
        }
      })
      .catch(function(error) {
        console.log("Error listing users:", error);
      });
  }
});


//Retrieve Data By Email
admin.auth().getUserByEmail(email)
.then(function(userRecord) {
  // See the UserRecord reference doc for the contents of userRecord.
  console.log("Successfully fetched user data:", userRecord.toJSON());
})
.catch(function(error) {
  console.log("Error fetching user data:", error);
});

//Retrieve Data by Phone Number
admin.auth().getUserByPhoneNumber(phoneNumber)
  .then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log("Successfully fetched user data:", userRecord.toJSON());
  })
  .catch(function(error) {
    console.log("Error fetching user data:", error);
  });

