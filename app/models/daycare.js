//Getting firebase started
var admin = require("firebase-admin");
require('dotenv').config();

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "daycare-46f7a",
    clientEmail: "firebase-adminsdk-pazc6@daycare-46f7a.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCpmW42PlBRT5SZ\nBihCMansTLeCPKfeuqckiIjrOG2H5xPWA50x285xL01rY/3S4jtF+59IOu/zCzv5\ngoc5DFFtN9xtIpk/BZgNCt/ga4A9sE8Diwtq7jIGpfwitTqk3NtNLZiyXPVwDnNT\nDVijGbKNDjdA8Eo6MdzEnnk8DjyRsxlHjKLNja77sAXS/SXdYumygQN1De2IduAc\nPxgqT2fFGetxRukLRhukzkRZlfn9mJEb3K+ScbxAZTzBkgiGkprrxRLnt5vXfBCG\nilijnTtuImKVvlE5O7CxA+YgZs+zZUabjF8Ptf94N/pYE8SMDlkLampBbAljnkgy\n/O+ocIYRAgMBAAECggEAB6+4RGV7yf01IXmBw5Y91EOZ1LsF0XaPv3xTCdreo/Hy\n5TH4Vg69nKv/Jaair1CpGdl29S57beSmQDJy1g2n3XvsCPCWr20drTs/I3J1am/q\n9NPz0Lg6gWPU0u6rWYnYHcRUqLWSOuGv+lifGfoLkvcALBJEp74j+klDlCQ1CVYl\nd/ZBolpetaxPHfuNA6UQraEnXuyld9Z0NnJSnilR9NBu5NVcnzlhEBGBM7hC1w9q\n+Akw4OxUYoEKbpdMJUxi6NMb/lOhbC8JUOb1jnygkLWXFNyd343acg0YD7kI2l00\n6R7Rjo/KOH7uQdUBn0Zl/USaXflUtr1ZmWnv/4pykQKBgQDjgBgk2oxef+bcHPcg\nbqEEZw/4N8x1Gv41JFOngaUqULd1ZKu2VGdgOTVjxztTztD1QKJCjtxp6yyE6xSN\n6xWvumNwspDZIzkwwVH1AAPhDGs0qApRs7LINSftxOZRbF5VfmDtxTVwPire2OEm\n+18oEh/b4iW+RbnNSflyGbgTTQKBgQC+2HVEnXzRijrC8rHvXlcP1GTW5fYooEue\n8ejDPQUKBbxHS1juTF/NTyPlEZTh2ZFb0Bz9qiKYF32N9toNSPVyBtqXI0YNPVT3\nHaTp+FMfElJWqD5AbMDGtK46cjIqlmtzGA5fbyv5ghwbwjaTVgoL9VPCFnzcbRha\nra+tw+DT1QKBgCH5UCG4zXuTSCuY28LpInyg036y/oKCfHH9MczzDHJMSYlrdkUt\nR57UDEgRSafTW9s0QscDxKDAsQ5MeO5UrBFpGU6MLBtxKipAxHd9ABdMnnnnmlrn\nJgzF+2eDnw2LzG6iB+GaMMfJUOekpcMHiQdX5ZAVrqNCkGO651iFxLqFAoGBAKzb\nolvjyYqBiXfKGyCUcocD+dIruCpUBiqRMiKkwkuxpjdtJ7+vrZZoeDqjEhb+2Yov\nlhKsZ2ka3b4YOKiPzMDbNGJwsKKNSsgJMbY6Fg+uqKWU/c2cs39HaAfIJ2grlmdJ\nAruuFkaIcq0x2/zXkYIDUzoY5D9DESwQ5W6eXKWBAoGBANBTp/WOhXZ5ZcCG7CaE\n6ivGH3iwl8DL+CBvVWOeKyuWC8a+xo6CBwXP+jYvNhf2HYL4S+hlgr8/gqQavZW0\nXckCVqrp6UTs1D1bOVOlCFFqPm71zh/fkgjktrwbfcDjpR67AyEaItajtP9p2ogS\nqg5UPEil8oMgrV0xpo3QAHmQ\n-----END PRIVATE KEY-----\n"
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