//Navtab Functions

var show_name_button = $("#attendNameShow");
var show_date_button = $("#attendDateShow");
var name_search = $(".attendbyName");
var date_search = $(".attendbyDate");

//Shows Name Search
$(show_name_button).on("click", function(){
    alert("Name button clicked")
    name_search.css('display','block');
    date_search.css('display','none');
})

//Shows Date Search
$(show_date_button).on("click", function(){
    alert("Date button clicked")
    date_search.css('display','block');
    name_search.css('display','none');
})

$("#goBack").on("click", function(){
   window.location.href="/";
})

//Functions to recieve reports

// Report by Name
$("#attendNameSubmit").on("click", function(){
    var childName = $("#attendName").val()
    $.getJSON("/child/report/" + childName, function(data) {
  
      // For each one
      for (var i = 0; i < data.length; i++) {
        // Display the apropos information on the page
        console.log(data[i].child_Name)
        $("#attendNameDump").append("<div class='card' style='width: 18rem;'>");
        $("#attendNameDump").append("<div class='card-body'>")
        $("#attendNameDump").append("<h5 class = 'card-title' data-id='" + data[i].id + "'>Child Name: " + data[i].child_Name + "<br />"+ "</h5>")
        $("#attendNameDump").append("<p class = 'card-text'>Guardian Sign In: " + data[i].guardian_Name + "<br/>"+"</p>")
        $("#attendNameDump").append("<p class = 'card-text'>Guardian Sign Out: " + data[i].guardian_Name_Out + "<br/>"+"</p>")
        $("#attendNameDump").append("<p class = 'card-text'>Time Clocked In: " + data[i].clock_in + "<br/>"+"</p>")
        $("#attendNameDump").append("<p class = 'card-text'>Time Clocked Out: " + data[i].clock_out + "<br/>"+"</p>")
        $("#attendNameDump").append("<p class = 'card-text'>Date: " + data[i].date_today + "<br/>"+"</p>")
  
  }
    })
  })

  $("#attendDateSubmit").on("click", function(){
    var start = $("#start-date").val();
    var end = $("#end-date").val();
    $.getJSON("/child/report/date/" + start + "/" + end, function(data) {
  
      // For each one
      for (var i = 0; i < data.length; i++) {
        // Display the apropos information on the page
        console.log(data[i].child_Name)
        $("#attendNameDump").append("<div class='card' style='width: 18rem;'>");
        $("#attendNameDump").append("<div class='card-body'>")
        $("#attendNameDump").append("<h5 class = 'card-title' data-id='" + data[i].id + "'>Child Name: " + data[i].child_Name + "<br />"+ "</h5>")
        $("#attendNameDump").append("<p class = 'card-text'>Guardian Sign In: " + data[i].guardian_Name + "<br/>"+"</p>")
        $("#attendNameDump").append("<p class = 'card-text'>Guardian Sign Out: " + data[i].guardian_Name_Out + "<br/>"+"</p>")
        $("#attendNameDump").append("<p class = 'card-text'>Time Clocked In: " + data[i].clock_in + "<br/>"+"</p>")
        $("#attendNameDump").append("<p class = 'card-text'>Time Clocked Out: " + data[i].clock_out + "<br/>"+"</p>")
        $("#attendNameDump").append("<p class = 'card-text'>Date: " + data[i].date_today + "<br/>"+"</p>")
  
  }
    })
  })

