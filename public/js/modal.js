//Add Modal

// Get the modal
var amodal = document.getElementById('aModal');
// Get the button that opens the modal
var abbutton = document.getElementById("abbutton");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal 
abbutton.onclick = function() {
  amodal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  amodal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == amodal) {
    amodal.style.display = "none";
  }
}

//View the Schedules

// // Get the modal
var vsModal = document.getElementById('vsModal');
// // Get the button that opens the modal
var vsbutton = document.getElementById("vsbutton");
// // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];
// // When the user clicks on the button, open the modal 
vsbutton.onclick = function() {
    vsModal.style.display = "block";
}
// // When the user clicks on <span> (x), close the modal
span.onclick = function() {
    vsModal.style.display = "none";
}
// // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == vsModal) {
    vsModal.style.display = "none";
  }
}

console.log("Working before the login function")
//View The Users

// Get the modal
var vacmyModal = document.getElementById('vacmyModal');
// Get the button that opens the modal
var vacbutton = document.getElementById("vacbutton");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];
// When the user clicks on the button, open the modal 
vacbutton.onclick = function() {
    vacmyModal.style.display = "block";
    $.getJSON("/child/list", function(data) {
      // For each one
      for (var i = 0; i < data.length; i++) {
        // Display the apropos information on the page
        console.log(data)
        $("#addKidsHere").append("<div class='card' style='width: 18rem;'>");
        $("#addKidsHere").append("<div class='card-body'>")
        $("#addKidsHere").append("<h5 class = 'card-title' data-id='" + data[i].id + "'>Child Name: " + data[i].child_Name + "<br />"+ "</h5>")
        $("#addKidsHere").append("<p class = 'card-text'>Guardian Name(s): " + data[i].guardian_Name + "<br/>"+"</p>")
        $("#addKidsHere").append("<p class = 'card-text'>Contact Number: " + data[i].phone + "<br/>"+"</p>")
        $("#addKidsHere").append("<p class = 'card-text'>Email: " + data[i].email + "<br/>"+"</p>")
        $("#addKidsHere").append("<p class = 'card-text'>Date Added: " + data[i].date_added + "<br/>"+"</p>")

      }
})
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    vacmyModal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == vacmyModal) {
    vacmyModal.style.display = "none";
  }
}

//Retrieve Users By Name Modal

// Get the modal
var retNModal = document.getElementById('retNModal');
// Get the button that opens the modal
var reUID = document.getElementById("reUID");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close3")[0];
// When the user clicks on the button, open the modal 
reUID.onclick = function() {
  retNModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  retNModal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == retNModal) {
    retNModal.style.display = "none";
  }
}

// Get the modal
var recmyModal = document.getElementById('recmyModal');
// Get the button that opens the modal
var recbutton = document.getElementById("recbutton");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close4")[0];
// When the user clicks on the button, open the modal 
recbutton.onclick = function() {
  recmyModal.style.display = "block";
  $.getJSON("/child/records", function(data) {
    // For each one
    for (var i = 0; i < data.length; i++) {
      // Display the apropos information on the page
      console.log(data)
      $("#addRecordsHere").append("<div class='card' style='width: 18rem;'>");
      $("#addRecordsHere").append("<div class='card-body'>")
      $("#addRecordsHere").append("<h5 class = 'card-title' data-id='" + data[i].id + "'>Child Name: " + data[i].child_Name + "<br />"+ "</h5>")
      $("#addRecordsHere").append("<p class = 'card-text'>Guardian Sign In: " + data[i].guardian_Name + "<br/>"+"</p>")
      $("#addRecordsHere").append("<p class = 'card-text'>Guardian Sign Out: " + data[i].guardian_Name_Out + "<br/>"+"</p>")
      $("#addRecordsHere").append("<p class = 'card-text'>Time Clocked In: " + data[i].clock_in + "<br/>"+"</p>")
      $("#addRecordsHere").append("<p class = 'card-text'>Time Clocked Out: " + data[i].clock_out + "<br/>"+"</p>")
      $("#addRecordsHere").append("<p class = 'card-text'>Date: " + data[i].date_today + "<br/>"+"</p>")



    }
})
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  recmyModal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == recmyModal) {
    recmyModal.style.display = "none";
  }
}

console.log("Working right before variables functions")

// Variables for manipulating the DOMs of the login page
// var username = document.getElementById("username").value;
var username;
console.log("Before click function name "+username);
var password;
var login = $("#login")
var container;
var container1;

console.log("After variables working")

login.click(function(event) {
  event.preventDefault();
  username = $('#username').val();
  password = $("#password").val();
  container = $(".container");
  container1 = $(".container1");
    console.log("Click function works!")
    console.log(username)
if (username == "mdvclifton" && password === "Jesus"){
  
// Get the container holding the admin page

   $(container1).css("display", "block");
    $(container).css("display", "none")
}
else {
  console.log("Error logging in");
}
});

//
$("#reUID").on("click", function(){
  var childName = $("#nameVal").val()
  $.getJSON("/child/retrieve/" + childName, function(data) {

    // For each one
    for (var i = 0; i < data.length; i++) {
      // Display the apropos information on the page
      console.log(data[0].child_Name)
      $(".childInfo").append("<div class='card' style='width: 18rem;'>");
      $(".childInfo").append("<div class='card-body'>")
      $(".childInfo").append("<h5 class = 'card-title' data-id='" + data[i].id + "'>Child Name: " + data[i].child_Name + "<br />"+ "</h5>")
      $(".childInfo").append("<p class = 'card-text'>Guardian: " + data[i].guardian_Name + "<br/>"+"</p>")
      $(".childInfo").append("<p class = 'card-text'>Contact Phone: " + data[i].phone + "<br/>"+"</p>")
      $(".childInfo").append("<p class = 'card-text'>Email: " + data[i].email + "<br/>"+"</p>")
      $("childInfo").append("<p class = 'card-text'>Date Added: " + data[i].date_added + "<br/>"+"</p>")
}
  })
})
//Add Child
$("#submitAddModal").on("click", function(){
  var childName = $("#nameValAddModal").val()
  var guardianName = $("#guardianValAddModal").val()
  var email = $("#emailValAddModal").val()
  var phone = $("#phoneValAddModal").val()
  window.location.href = '/child/add/'+ childName + '/' + guardianName +'/' + email+'/' + phone;
  alert(childName + " " + guardianName + " " + email + " " + phone + "Child Added")
})

//Delete Child
$("#deleteChild").on("click", function(){
  var childName = $("#nameVal").val()
  window.location.href = '/child/delete/'+ childName;
  alert(childName + " deleted.")
})

//Clock In Child
$("#clock-in").on("click", function(){
  var childName = $("#nameVal").val()
  var guardianName = $("#guardianIn").val()
  window.location.href = '/child/clock-in/'+ childName + "/" + guardianName;
  alert(childName + " clocked in.")
})

//Clock It Child
$("#clock-out").on("click", function(){
  var childName = $("#nameVal").val()
  var guardianName = $("#guardianOut").val()
  window.location.href = '/child/clock-out/'+ childName + "/" + guardianName;
  alert(childName + " clocked out.")
})


