  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDZwIxXFNk928XzjMRZ6bpXVkeuEMbwIUI",
    authDomain: "in-the-know-a0b16.firebaseapp.com",
    databaseURL: "https://in-the-know-a0b16.firebaseio.com",
    projectId: "in-the-know-a0b16",
    storageBucket: "",
    messagingSenderId: "447330895711"
  };
firebase.initializeApp(config);

//create a variable to reference the database
var database = firebase.database();

//initialize value
var todos = "";
var todoclose = $("<button>");
todoclose.addClass("checkbox");
todoclose.text("☑");

$(document).ready(function() {
// user clicked on the add button in the to-do field add that text into the to-do text
$('#add-todo').on('click', function(event) {
  event.preventDefault();

  //values per text box
  todos = $("#todo-input").val().trim();

  //test values from textbox
  console.log(todos);

//code for handling the push
database.ref().push({
  todos: todos
  });

});

//firebase watcher
database.ref().limitToLast(1).on('value', snapshot => {
  snapshot.forEach(snap => {
    todos = snap.child("todos").val();

//prepend values to html
    $("<div/>", {
      "class": "to-do-item"
    }).append([todos]).appendTo($(".col-4"));

//to remove item from checklist
$(document.body).on("click", ".to-do-item",function() {
  $(this).remove();
  database.ref('/todos/-key1').remove();
  
});
  });
});

});