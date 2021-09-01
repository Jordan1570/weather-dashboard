var oneCallWeatherApiKey = '233ffcffa8f1bf8f0bb644310cc67c5a';
var weatherDisplayKey = '013fa777140808cec57cca3ec4f1c8d8';

//on click event listener that grabs value of city input
$("#searchBtn").on('click', function () {
  // grab the value of where the user inputs the city they're searching
  var cityInput = $('#cityInput').val()

  // create ul in html - done 

  // creatle li inside ul - done 

  // grab value of city input (append cityInput variable)

  // append cityInput variable into li on click 

  //  build url string + api call

  var longLatUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${oneCallWeatherApiKey}`



  fetch(longLatUrl) //longitude and latitude api
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var lon = data.coord.lon
      var lat = data.coord.lat

      // displaying city name
      var userCurrentCityDisp = document.getElementById('searchedCityName')
      userCurrentCityDisp.textContent = data.name;

      // displaying date
      var titleEl = document.getElementById('searchedCityDate')
      titleEl.textContent = moment().format('l');

      // displaying icon
      var iconEl = document.getElementById('searchedCityIcon')
      var iconDisplay = data.weather[0].icon
      iconEl.setAttribute('src', `http://openweathermap.org/img/wn/${iconDisplay}@2x.png`)

      // calling api to get data
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
})



// grabbing span with id searchedCityname and appending data into it from api  
function renderWeather(data) {
  console.log(data)


  // displaying city temperature
  var temp = data.current.temp
  var convertedTemp = (temp - 273.15) * (9 / 5) + 32 // converting temp from kelvin to fahrenheit
  var userCurrentCityTemp = document.getElementById('tempOfSearchedCity')
  userCurrentCityTemp.textContent = convertedTemp.toFixed(0);

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

  data.daily.forEach(function (el, i) {
    if (i > 4) return // only want to show first 5 days

    //displaying date
    var userFutureCityDisplay = document.getElementById(`forecast-title-${i}`)
    userFutureCityDisplay.textContent = moment().add(i+1,'days').format('dddd') 

    // displaying icon
    var iconElTwo = document.getElementById(`forecast-icon-${i}`)
    var iconDisplayTwo = data.daily[i].weather[0].icon
    iconElTwo.setAttribute('src', `http://openweathermap.org/img/wn/${iconDisplayTwo}@2x.png`)

    // displaying temp
    // var tempEl = document.getElementById(`temp-tag-${i}`)
    // ConvertedTempEl.textContent = (el.temp.day - 273.15 * 9/5 +32)
    // ConvertedTempEl.textContent = toFixed(2);

    // var tempEl = data.daily[i].temp
    
     var tempEl = parseInt(el.temp.day)
     var convertedTempEl = (tempEl - 273.15) * (9 / 5) + 32 // converting temp from kelvin to fahrenheit
     var futureCityTemp = document.getElementById(`temp-tag-${i}`)
     futureCityTemp.textContent = convertedTempEl.toFixed(0);

    // displaying wind speed
    var windEl = document.getElementById(`wind-tag-${i}`)
    windEl.textContent = el.wind_speed;

    // displaying humidity
    var humidityEl = document.getElementById(`humidity-tag-${i}`)
    humidityEl.textContent = el.humidity;
  })
}

// on click for cities displayed in the history
$("historyBtn").on('click', function () {

})






 //  var iconEl = document.getElementById(`forecast-icon-${i}`)