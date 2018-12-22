$(document).ready(function() {
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
        var weatherIcon = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png"
        console.log(weatherIcon);
        $("#weather").text(JSON.stringify(response));
    })
});
