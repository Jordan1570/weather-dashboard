var oneCallWeatherApiKey = '233ffcffa8f1bf8f0bb644310cc67c5a';
var weatherDisplayKey = '013fa777140808cec57cca3ec4f1c8d8';

//on click event listener that grabs value of city input
$("#searchBtn").on('click', function () {
  // grab the value of where the user inputs the city they're searching
  var cityInput = $('#cityInput').val()
  //  build url string + api call
  var longLatUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${oneCallWeatherApiKey}`
  //var oneCallApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${weatherDisplayKey}`
  

  fetch(longLatUrl) //longitude and latitude api
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var lon = data.coord.lon
      var lat = data.coord.lat

     var oneCallApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${weatherDisplayKey}`
      console.log(data);
      fetch(oneCallApi) //weather to displayed api
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        console.log(data)
      })
    })

  // render (put data on element)
  //renderWeather(data)
  //renderForecast(data)


})

// save local storage

// grabbing span with id searchedCityname and appending data into it from api  
function renderWeather(data) {
  var temp = data.current.temp
  var convertedTemp = (temp - 273.15) * (9 / 5) + 32
  var userCityDisplay = document.querySelector('#searchedCityName');
  userCityDisplay.textContent = data.
    userCityDisplay.appendChild(userCityDisplay);




}


//on click event that saves history to local storage

$









