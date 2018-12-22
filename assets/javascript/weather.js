var APIKey = "dd90b036fea16c286d0b1e900c84157c";
var zip = "19146"
var queryURL = "https://api.openweathermap.org/data/2.5/weather?zip=" +
zip + "&units=imperial&appid=" + APIKey

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(queryURL);
    console.log(response);
    console.log("hello");
})