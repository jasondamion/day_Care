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


//The username is not coming up and the firebase admin functions arent working
