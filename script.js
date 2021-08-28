var oneCallWeatherApiKey = '233ffcffa8f1bf8f0bb644310cc67c5a';

//on click event listener that grabs value of city input
$("#searchBtn").on('click', function () {
  // grab input (city)
  var cityInput = $('#cityInput').val()
  //  build url string + api call
  var queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${oneCallWeatherApiKey}`

    fetch(queryURL)
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        console.log(data)

        // render (put data on element)
        renderWeather(data)


      })
    
  // save local storage

  function renderWeather(data) {


  }


  //on click event that saves history to local storage

  $





  

  console.log(queryURL)


})