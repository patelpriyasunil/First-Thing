$(document).ready(function() {
    
var latitude;
var longitude;

    function displayWeather() {
        var APIKey = "dd90b036fea16c286d0b1e900c84157c";
        var zip = "19146"
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=imperial&appid=" + APIKey

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
          //Create weather icon
            var weatherIconURL = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
            var weatherIcon = $("<img>");
            weatherIcon.attr("src", weatherIconURL);
            $("#weather").append(weatherIcon);

            $("#weather").append(JSON.stringify(response));
        });
    };

    function googleLocation() {
        var APIKey = "AIzaSyCh4H_JTQPRDjRLXjGkPYaYmfdaX6y5ncI";
        var queryURL = "https://www.googleapis.com/geolocation/v1/geolocate?key=" + APIKey;

        $.ajax({
            url: queryURL,
            method: "POST"
        }).then(function(response) {
            console.log(response);
            latitude = response.location.lat;
            longitude = response.location.lng;
            displayWeather();
        });
    };
    // Commented this out to prevent overusing the API key for now
    googleLocation();
});
