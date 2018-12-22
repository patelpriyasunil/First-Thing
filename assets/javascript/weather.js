$(document).ready(function() {
    
    function displayWeather() {
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
          //Create weather icon
            var weatherIconURL = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
            var weatherIcon = $("<img>");
            weatherIcon.attr("src", weatherIconURL);
            console.log(weatherIconURL);
            $("#weather").append(weatherIcon);

            $("#weather").append(JSON.stringify(response));
        });
    };
          
    displayWeather();

    function getLocation(){
        var APIKey = "7973f370d72acc8a88dbd18f23806729a26e319cb848dac934bb95b0";
        var queryURL = "https://api.ipdata.co?api-key=" + APIKey;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(queryURL);
            console.log(response);
        });
    };
    getLocation();

    function googleLocation() {
        var APIKey = "AIzaSyCh4H_JTQPRDjRLXjGkPYaYmfdaX6y5ncI";
        var queryURL = "https://www.googleapis.com/geolocation/v1/geolocate?key=" + APIKey;

        $.ajax({
            url: queryURL,
            method: "POST"
        }).then(function(response) {
            console.log(response);
            console.log(queryURL);
            var latitude = response.location.lat;
            var longitude = response.location.lng;
        });
    };
    // Commented this out to prevent overusing the API key for now
    googleLocation();
});
