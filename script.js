var oneCallWeatherApiKey = '233ffcffa8f1bf8f0bb644310cc67c5a';

//on click event listener that grabs value of city input
$("#searchBtn").on('click', function () {
  // grab the value of where the user inputs the city they're searching
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
    var userDisplay = document.querySelector('#userWeatherDisplay');
    var weatherTitle = document.createElement('h1');
    weatherTitle.textContent = data. 
    userDisplay.appendChild(weatherTitle);




  }


  //on click event that saves history to local storage

  $





  

  console.log(queryURL)


})