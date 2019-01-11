var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
url += '?' + $.param({
   'api-key': "e6e3a8e67e8a485dbec602712a2de5fe"
});

$.ajax({
   url: url,
   method: 'GET',
}).done(function (response) {
   console.log(url);
   console.log(response);

   for (var i = 0; i <= 2; i++) {

      // Creating and storing a div tag
      var articleDiv = $("<div>");
      //  adding border and margin
      articleDiv.addClass("col text-left")
      articleDiv.addClass("col text-left m-1")

      // Storing the imgURL
      var imgURL = response.results[i].multimedia[0].url;

      // Creating an element to hold the image
      var image = $("<img>").attr("src", imgURL);
      // adding margin around the image
      image.addClass("m-1")

      // Appending the image
      articleDiv.append(image);

      // Storing the title data
      var title = response.results[i].title;

      // Displaying the title and linking it to the article url
      articleDiv.append("<h6 class='d-inline'>" + "<a href='" + response.results[i].url + "' target='_blank'>" + title + "</a>" + "</h6>");

      // Storing the date data
      var date = response.results[i].created_date;

      // Displaying the date
      articleDiv.append("<h6>" + moment(date).format("dddd, MMMM Do YYYY, h:mm a") + "</h6>");

      // Storing the abstract data
      var abstract = response.results[i].abstract;

      // Creating an element to hold the abstract
      var pThree = $("<p>").text(abstract);

      // Displaying the abstract
      articleDiv.append(pThree);
      articleDiv.append("<hr>");

      // Appending the articleDiv to the HTML page in the "#acticle-section" div
      $("#article-section").append(articleDiv);
   }
});
