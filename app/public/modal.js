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

console.log("Working Right Now before the login function")
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

console.log("Working right before variables functions")

// Variables for manipulating the DOMs of the login page
var username = $('#username').val()
var password = $("#password").val()
var login = $("#login")
var container = $("#container")

console.log("After variables working")

$(login).click(function() {
    console.log("Click function works!")
    console.log(username)
if (username == "mdvclifton"){
    console.log(username)
  if (password == "Jesus"){
      console.log(password)
// Get the container holding the admin page
var container1 = document.getElementById('container1');
   container1.style.display = "block";
    container.style.display = "none"
}
else{
    alert("Wrong password")
}
}
else {
alert("Username is wrong")
}
})


//The username is not coming up and the firebase admin functions arent working.
