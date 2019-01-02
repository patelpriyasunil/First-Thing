    //Initialize Firebase
    var config = {
        apiKey: "AIzaSyDzBCE_o3i2jGTkD2BWuiZmppUYbEyP5pI",
        authDomain: "project1-18921.firebaseapp.com",
        databaseURL: "https://project1-18921.firebaseio.com",
        projectId: "project1-18921",
        storageBucket: "project1-18921.appspot.com",
        messagingSenderId: "55286196596"
      };
      firebase.initializeApp(config);
      
      var database = firebase.database();
  
   //create the initial todocount variable
   var toDoCount = 0;
   
  window.onload = function() {
      //user clicked on the add button in the to-do field add that text into the to-do text
      $('#add-to-do').on('click', function(event) {
          event.preventDefault();
          //assign variable to the value entered into the textbox
          var value = document.getElementById('to-do').value; 
          //test value
          console.log(value);
          //prepend values into the html and add checkmark, checkbox, and line break to make list
          var linebreak = "<br/>";
          var todoclose = $("<button>");
          todoclose.attr("data-to-do", toDoCount);
          todoclose.addClass("checkbox");
          todoclose.text("☑");
  
          //prepend values to html
          $("#to-dos").prepend(linebreak);
          $("#to-dos").prepend(value);
          $("#to-dos").prepend(todoclose);
          toDoCount++;
  
  
  //to remove item from checklist
          var i;
          for(i = 0; i < todoclose.length; i++) {
              todoclose[i].onclick = function() {
                  var removal = todoclose[i];
                  $("#to-dos").remove();
              }
          }
      });
   
      }
  
  
      
  
      
  
      
      