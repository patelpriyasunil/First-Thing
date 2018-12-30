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
            console.log(queryURL);
            var locationHeader = $("<h2>")
            locationHeader.addClass("text-muted");
            locationHeader.text("in " + response.name);
            $("#weather").append(locationHeader);
            //Create and display weather icon
            var weatherIconURL = "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
            var weatherIcon = $("<img>");
            weatherIcon.attr("src", weatherIconURL);
            //Display weather and temperature
            $("#weather").append("<h3>" + (Math.floor(response.main.temp)) + "&#8457;</h3>");
            $("#weather").append(weatherIcon);
            $("#weather").append("<h4 class='d-inline'> " + response.weather[0].main + "</h4>");
            $("#weather").append("<h5>Humidity: " + response.main.humidity + "%</h5>");
            $("#weather").append("<h5>Wind speed: " + response.wind.speed + " mph</h5>");
            
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
    googleLocation();
});
