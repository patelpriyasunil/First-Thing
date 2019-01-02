window.onload = function() {
//user clicked on the add button in the to-do field add that text into the to-do text
document.getElementById('add-to-do').addEventListener('click', function() {
  var value = document.getElementById('to-do').value;  
    console.log(value);
});
}





//create the initial todocount variable
var toDoCount = 0;

$("#add-to-do").on('click', function(event) {
  event.preventDefault();

//to get the to do value from the textbox and store it in a variable
var ToDoItems = $("#to-do").val().trim();

var ToDoAdd = $("<p>");
ToDoAdd.attr("id", "item-" + toDoCount);
ToDoAdd.text(ToDoItems);

console.log(ToDoItems);

var todoclose = $("<button>");

todoclose.attr("data-to-do", toDoCount);

//create a class called checbox 
todoclose.addClass("checkbox");

//include a checkbox to each item
todoclose.text("✓");

//prepend the items added to be listed out.
ToDoAdd = ToDoAdd.prepend(todoclose);

//test
console.log(toDoAdd);

//append values from todoadd to html
$("#to-dos").append(toDoAdd);

//clear the textbox
$("to-do").val("");

toDoCount++;
});


$(document.body).on("click", ".checkbox", function() {

  var toDoNumber = $(this).attr("data-to-do");
  $("#item-" + toDoNumber).remove();
});

//Initialize Firebase
//var config = {
//  apiKey: "AIzaSyDzBCE_o3i2jGTkD2BWuiZmppUYbEyP5pI",
//  authDomain: "project1-18921.firebaseapp.com",
//  databaseURL: "https://project1-18921.firebaseio.com",
//  projectId: "project1-18921",
//  storageBucket: "project1-18921.appspot.com",
//  messagingSenderId: "55286196596"
//};
//firebase.initializeApp(config);

//var database = firebase.database();

