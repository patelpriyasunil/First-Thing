var url = "https://newsapi.org/v2/top-headlines?sources=the-wall-street-journal&apiKey=124b8f94b39c40ddb343032372b6e31a";
var req = new Request(url);
$.ajax({
   url: url,
   method: "GET",
 }) .then(function(response) {
            return response
      }).then(data=>{
         
         console.log(data);
         var date = data.articles[0].content
         console.log(date);
      

   for (var i = 0; i <= 2; i++) {

      
// //       // Creating and storing a div tag
      var articleDiv = $("<div>");
// //       //  adding border and margin
      articleDiv.addClass("col text-left border border-info m-1")


// //          // // Storing the imgURL
         var img = `<img style="height:80px; width:80px" class ="m-1 img-thumbnail"  src= ${data.articles[i].urlToImage}>`

// //          // // Creating an element to hold the image
        
// //          // // Appending the image
         articleDiv.append(img);
         

// //          // Storing the title data
         var title = data.articles[i].title;

// //          // Displaying the title and linking it to the article url
         articleDiv.append("<h6 class='d-inline'>" + "<a href='"+ data.articles[i].url + "' target='_blank'>" + title + "</a>" + "</h6>");
        


// //          // Storing the date data
         var date = data.articles[i].publishedAt;

//          // Displaying the date
         articleDiv.append("<h6>" + moment(date).format("dddd, MMMM Do YYYY, h:mm a" ) + "</h6>");

        
//          // Storing the abstract data
         var abstract = data.articles[i].content;
        
//          // Creating an element to hold the abstract
         var pThree = $("<p>").text(abstract);

//          // Displaying the abstract
         articleDiv.append(pThree);



//    // Appending the articleDiv to the HTML page in the "#acticle-section" div
   $("#article-section").append(articleDiv);

   }   
});