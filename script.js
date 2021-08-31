var oneCallWeatherApiKey = '233ffcffa8f1bf8f0bb644310cc67c5a';
var weatherDisplayKey = '013fa777140808cec57cca3ec4f1c8d8';

//on click event listener that grabs value of city input
$("#searchBtn").on('click', function () {
  // grab the value of where the user inputs the city they're searching
  var cityInput = $('#cityInput').val()
  //  build url string + api call
  var longLatUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${oneCallWeatherApiKey}`



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

          renderWeather(data);

        })
    })

  // render (put data on element)
  //renderWeather(data)
  //renderForecast(data)


})

// save local storage

// grabbing span with id searchedCityname and appending data into it from api  
function renderWeather(data) {
    // displaying city name
    var userCurrentCityDisp = document.getElementById('searchedCityName')
    userCurrentCityDisp.textContent = data.name;

    // displaying city temperature
    var temp = data.current.temp
    var convertedTemp = (temp - 273.15) * (9 / 5) + 32 // converting temp from kelvin to fahrenheit
    var userCurrentCityTemp = document.getElementById('tempOfSearchedCity')
    userCurrentCityTemp.textContent = convertedTemp.toFixed(2);

    //displaying the current wind speed
    var wind = document.getElementById('windOfSearchedCity')
    wind.textContent = data.current.wind_speed;

    //displaying current humidity
    var humidity = document.getElementById('humidityOfSearchedCity')
    humidity.textContent = data.current.humidity;

    //displaying current uvi
    var uV = document.getElementById('uvIndexOfSearchedCity')
    uV.textContent = data.current.uvi;

    // start of five day forecast

    data.data.forEach(function (el, i) {
      if (i > 4) return // only want to show first 5 days

      var titleEl = document.getElementById(`forecast-title-${i}`)


      var tempEl = document.getElementById(`temp-tag-${i}`)
      tempEl.textContent = data.daily[0].temp.day;

      var windEl = document.getElementById(`wind-tag-${i}`)
      windEl.textContent = data.daily;

      var humidityEl = document.getElementById(`humidity-tag-${i}`)
      humidityEl.textContent = data.daily;
    })
  }