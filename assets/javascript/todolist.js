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
    
var database = firebase.database();

//create the initial todocount variable
var toDoCount = 0;

//initialize todos for firebase
var todos;

$(function() {
  //user clicked on the add button in the to-do field add that text into the to-do text
  $('#add-to-do').on('click', function(event) {
    event.preventDefault();

    //assign variable to the value entered into the textbox
    var value = document.getElementById('to-do').value;
    //test value
    console.log(value);

    var todoitem = $("#to-dos");
    todoitem.attr("item-");
    //prepend values into the html and add checkmark, checkbox, and line break to make list
    var linebreak = "<br/>";
    var todoclose = $("<button>");
    todoclose.attr("data-to-do", toDoCount);
    todoclose.addClass("checkbox");
    todoclose.text("☑");

    //prepend values to html
    $("<div/>", {
        "class": "to-do-item"
      })
      .append([todoclose, value, linebreak])
      .appendTo($("#to-dos"));
    toDoCount++;

    //to remove item from checklist
    $(document.body).on("click", ".to-do-item", function() {
      $(this).remove();
    });
  });

  //Firebase Stuff
  $("#add-to-do").on('click', function(event){
    event.preventDefault();
    todos = $(".to-do-item").val().trim();

    console.log(todos);
 
    database.ref().push({
    todos: todos
    });
    });
    //firebase watcher
    database.ref().limitToLast(1).on('value', snapshot => {
    snapshot.forEach(snap => {
        todos = snap.child("List").val();
    });
    });


});