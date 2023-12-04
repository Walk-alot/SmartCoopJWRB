$('#btnToggleRegister').click(function(){
    $('#divLogin').slideUp()
    $('#divRegister').slideDown()
})

$('#btnToggleLogin').click(function(){
    $('#divRegister').slideUp()
    $('#divLogin').slideDown()
})


$('#btnNavLogin').click(function(){
    $('#divLogin').slideToggle()
    $('#divRegister').hide()
})

$('#btnNavLogout').click(function(){
    



    $('#btnMyAccountToggle').hide()
    $('#btnNavLogout').hide()
    $('#btnNavLogin').show()
    $('#Dashboard').slideUp()
    $('#divLogin').slideDown()
    $('#DoorDash').hide()
    $('#LightDash').hide()
    $('#ACDash').hide()
    $('#HomeDash').hide()
    $('#FoodWaterDash').hide()
    $('#weatherInfo').hide()
})

$('#btnHomeDash').click(function(){
    $('#HomeDash').slideToggle()
    $('#DoorDash').hide()
    $('#LightDash').hide()
    $('#ACDash').hide()
    $('#FoodWaterDash').hide()
})

$('#btnDoorDash').click(function(){
    $('#DoorDash').slideToggle()
    $('#HomeDash').hide()
    $('#LightDash').hide()
    $('#ACDash').hide()
    $('#FoodWaterDash').hide()
})

$('#btnLightDash').click(function(){
    $('#LightDash').slideToggle()
    $('#DoorDash').hide()
    $('#HomeDash').hide()
    $('#ACDash').hide()
    $('#FoodWaterDash').hide()
})

$('#btnACDash').click(function(){
    $('#ACDash').slideToggle()
    $('#DoorDash').hide()
    $('#LightDash').hide()
    $('#HomeDash').hide()
    $('#FoodWaterDash').hide()
})

$('#btnFoodWaterDash').click(function(){
    $('#FoodWaterDash').slideToggle()
    $('#DoorDash').hide()
    $('#LightDash').hide()
    $('#ACDash').hide()
    $('#HomeDash').hide()
})


//Login Card
$('#btnLogin').click(function () {
    let strUsername = $('#txtLoginEmail').val();
    let strPassword = $('#txtLoginPassword').val();
    let blnError = false;
    let strErrorMessage = '';

    if (strUsername < 6) {
        blnError = true;
        strErrorMessage += '<p> Email cannot be blank. </p>';
    }
    if (strPassword < 8) {
        blnError = true;
        strErrorMessage += '<p> Password needs to be 8 or more. </p>';
    }
    if (blnError == true) {
        Swal.fire({
            icon: 'error',
            title: 'Login Credentials Error',
            html: strErrorMessage
            });
    }

    if(blnError == false)
    {
      $.post('https://simplecoop.swollenhippo.com/sessions.php', { Email: 'bburchfield2@tntech.edu', Password: 'Mickey2022!' }, function (sessionResult) {
      console.log(sessionResult);
      sessionResult = JSON.parse(sessionResult);
      if (sessionResult.Error) {
        Swal.fire({
          icon: 'error',
          html: sessionResult.Error,
        });
      } else {
        sessionStorage.setItem('CoopID', sessionResult.CoopID);
        $('#divLogin').slideUp()
        $('#Dashboard').slideDown()
        $('#btnMyAccountToggle').show()
        $('#btnNavLogout').show()
        $('#btnNavLogin').hide()
        $('#weatherInfo').show()
        }
    })
  }
});

//Register Card
$('#btnRegister').click(function(){
    let strRegEmail = $('#txtRegEmail').val();
    let strRegPassword = $('#txtRegPassword').val();
    let strRegFirstName = $('#txtRegFirstName').val();
    let strRegLastName = $('#txtRegLastName').val();
    let strRegAddress1 = $('#txtRegAddress1').val();
    let strRegAddress2 = $('#txtRegAddress2').val();
    let strRegCity = $('#txtRegCity').val();
    let strRegState = $('#txtRegState').val();
    let strRegZip = $('#txtRegZip').val();
    let strRegPhoneNumber = $('#txtRegPhoneNumber').val();
    let strRegCoopID = $('#txtRegCoopID').val();

    let blnError = false;
    let strErrorMessage = '';

    if(strRegEmail.length < 6){
        blnError = true;
        strErrorMessage += '<p>Email cannot be blank. </p>';
    }

    if(strRegPassword < 8){
        blnError = true;
        strErrorMessage += '<p>Password cannot be blank. </p>';
    }

    if(strRegFirstName == ''){
        blnError = true;
        strErrorMessage += '<p>First Name cannot be blank. </p>';
    }

    if(strRegLastName == ''){
        blnError = true;
        strErrorMessage += '<p>Last Name cannot be blank. </p>';
    }

    if(strRegAddress1 < 4){
        blnError = true;
        strErrorMessage += '<p>Street Address cannot be blank. </p>';
    }

    if(strRegCity == ''){
        blnError = true;
        strErrorMessage += '<p>City cannot be blank. </p>';
    }

    if(strRegState == ''){
        blnError = true;
        strErrorMessage += '<p>State cannot be blank. </p>';
    }

    if(strRegZip < 5){
        blnError = true;
        strErrorMessage += '<p>Zip Code cannot be blank. </p>';
    }

    if(strRegPhoneNumber < 10){
        blnError = true;
        strErrorMessage += '<p>Phone Number cannot be blank. </p>';
    }

    if(strRegCoopID < 6){
        blnError = true;
        strErrorMessage += '<p>Coop ID cannot be blank. </p>';
    }

    if(blnError == true){
        Swal.fire({
            icon: 'error',
            title: 'Registration Error',
            html: strErrorMessage
        })
    }

    if(blnError == false){

      $.post('https://simplecoop.swollenhippo.com/coop.php', function (coopResult) {
      console.log(coopResult);
      coopResult = JSON.parse(coopResult);
      if (coopResult.Error) {
        Swal.fire({
          icon: 'error',
          title: 'Coop ID Error',
          html: coopResult.Error,
        });
      } else {
        $.post('https://simplecoop.swollenhippo.com/users.php', { Email: 'bburchfield2@tntech.edu', Password: 'Mickey2022!', FirstName: 'Bennn', LastName: 'BURCHFIELD', CoopID: '65' }, function (result) {
          console.log(result);
          result = JSON.parse(result);
          if (result.Error) {
            Swal.fire({
              icon: 'error',
              title: 'Create Account Error',
              html: result.Error,
            });
          } else {
            $.post('https://simplecoop.swollenhippo.com/sessions.php', { Email: 'bburchfield2@tntech.edu', Password: 'Mickey2022!' }, function (sessionResult) {
              console.log(sessionResult);
              sessionResult = JSON.parse(sessionResult);
              if (sessionResult.Error) {
                Swal.fire({
                  icon: 'error',
                  html: sessionResult.Error,
                });
              } else {
                sessionStorage.setItem('CoopID', sessionResult.CoopID);

                $('#divRegister').slideUp()
                $('#Dashboard').slideDown()
                $('#btnMyAccountToggle').show()
                $('#btnNavLogout').show()
                $('#btnNavLogin').hide()
                $('#weatherInfo').show()

                Swal.fire({
                  icon: 'success',
                  title: 'Account Creation Successful',
                });
              }
            });
          }
        });
      }
    });
    }           
})

// Dashboards


// Weather Display
async function getWeather() {
  const apiKey = '434cfb936758e07ed174697f92432b11';
  const city = 'cookeville';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      displayWeather(data);
  } catch (error) {
      console.error('Error fetching weather data:', error);
      displayWeatherError();
  }
}

function displayWeather(weatherData) {
  const city = weatherData.name;
  const temperature = weatherData.main.temp;
  const weatherDescription = weatherData.weather[0].description;
  const timestamp = weatherData.dt;
  const time = new Date(timestamp * 1000).toLocaleTimeString();

  const weatherInfo = `
      <h2>Weather in ${city}</h2>
      <p>Description: <label class="text-uppercase">${weatherDescription}</label></p>
      <p>Temperature: ${temperature} °F</p>
      <p>Time: ${time}</p>
  `;

  document.getElementById('weatherInfo').innerHTML = weatherInfo;
}

function displayWeatherError() {
  document.getElementById('weatherInfo').innerHTML = '<h2>Failed to fetch weather data.</h2>';
}

// Function to update the clock
function updateClock() {
  const clockElement = document.getElementById('clock');
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  const timeZoneString = Intl.DateTimeFormat().resolvedOptions().timeZone;
  clockElement.textContent = `Current Time: ${timeString} (${timeZoneString})`;
}

// Door Control Functions
function openDoor() {
  document.getElementById('doorStatus').textContent = 'The door is manually opened.';
}

function closeDoor() {
  document.getElementById('doorStatus').textContent = 'The door is manually closed.';
}

function toggleDoorAutomatic() {
  const doorStatusElement = document.getElementById('doorStatus');
  const doorButtons = document.getElementById('doorButtons');
  const currentHour = new Date().getHours();
  const isDaytime = currentHour >= 6 && currentHour < 18;

  if (doorStatusElement.dataset.mode === 'automatic') {
      doorStatusElement.dataset.mode = 'manual';
      doorStatusElement.textContent = 'Switched to manual mode.';
      doorButtons.style.display = 'block';
  } else {
      doorStatusElement.dataset.mode = 'automatic';
      doorStatusElement.textContent = isDaytime ? 'It\'s daytime, the door is open.' : 'It\'s nighttime, the door is closed.';
      doorButtons.style.display = 'none';
  }

  // Call the updateClock function when the door mode is toggled
  updateClock();
}

// Fetch weather data initially
getWeather();

// Update weather data every 10 minutes (600,000 milliseconds)
setInterval(getWeather, 600000);

// Fetch weather data when the page loads
document.addEventListener('DOMContentLoaded', getWeather);

// Update the clock every second (1000 milliseconds)
setInterval(updateClock, 1000);

console.log('Weather last updated at:', new Date());
// End Weather Display

// Light Control Functions
function turnOnLights() {
  document.getElementById('lightStatus').textContent = 'The lights are manually turned on.';
}

function turnOffLights() {
  document.getElementById('lightStatus').textContent = 'The lights are manually turned off.';
}

function toggleLightAutomatic() {
  const lightStatusElement = document.getElementById('lightStatus');
  const lightButtons = document.getElementById('lightButtons');
  const currentHour = new Date().getHours();
  const isDaytime = currentHour >= 6 && currentHour < 18;

  if (lightStatusElement.dataset.mode === 'automatic') {
    lightStatusElement.dataset.mode = 'manual';
    lightStatusElement.textContent = 'Switched to manual mode.';
    lightButtons.style.display = 'block';
  } else {
    lightStatusElement.dataset.mode = 'automatic';
    lightStatusElement.textContent = isDaytime ? 'It\'s daytime, the lights are off.' : 'It\'s nighttime, the lights are on.';
    lightButtons.style.display = 'none';
  }
}
  
      // Food and Water Distribution Functions
      let foodPercentage = 100; // Initial food percentage

      function giveOutFoodWater() {
        document.getElementById('foodWaterStatus').textContent = 'Food and water have been manually given out.';
        increaseFoodPercentage(10); // Increase food percentage by 10%
      }
  
      function toggleFoodWaterAutomatic() {
        const foodWaterStatusElement = document.getElementById('foodWaterStatus');
        const foodWaterButtons = document.getElementById('foodWaterButtons');
  
        if (foodWaterStatusElement.dataset.mode === 'automatic') {
          foodWaterStatusElement.dataset.mode = 'manual';
          foodWaterStatusElement.textContent = 'Switched to manual mode.';
          foodWaterButtons.style.display = 'block';
        } else {
          foodWaterStatusElement.dataset.mode = 'automatic';
          foodWaterStatusElement.textContent = 'Switched to automatic mode.';
          foodWaterButtons.style.display = 'none';
        }
      }
  
      function updateFoodStatusBar() {
        // Decrease food percentage by 0.01% every second
        foodPercentage = Math.max(0, foodPercentage - 0.01);
        const foodStatusBar = document.getElementById('foodStatusBar');
        foodStatusBar.style.width = `${foodPercentage}%`;
        foodStatusBar.textContent = `${foodPercentage.toFixed(2)}%`;
      }
  
      // Increase food percentage by a specified amount (in percentage)
      function increaseFoodPercentage(amount) {
        foodPercentage = Math.min(100, foodPercentage + amount);
        updateFoodStatusBar();
      }
  
      // Countdown Clock Function
      function updateCountdown() {
        const countdownElement = document.getElementById('countdown');
        const now = new Date();
        const currentHour = now.getHours();
        let nextDistributionTime;
  
        if (currentHour < 7) {
          nextDistributionTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 7, 0, 0);
        } else if (currentHour < 12) {
          nextDistributionTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0);
        } else if (currentHour < 19) {
          nextDistributionTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 19, 0, 0);
        } else {
          nextDistributionTime = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 7, 0, 0);
        }
  
        const timeDifference = nextDistributionTime - now;
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
        countdownElement.textContent = `Next distribution in: ${hours}h ${minutes}m ${seconds}s`;
      }
  
      // Set the initial status based on the time for all devices
      const doorStatusElement = document.getElementById('doorStatus');
      const lightStatusElement = document.getElementById('lightStatus');
      const foodWaterStatusElement = document.getElementById('foodWaterStatus');
      const doorButtons = document.getElementById('doorButtons');
      const lightButtons = document.getElementById('lightButtons');
      const foodWaterButtons = document.getElementById('foodWaterButtons');
  
      doorStatusElement.dataset.mode = 'automatic';
      lightStatusElement.dataset.mode = 'automatic';
      foodWaterStatusElement.dataset.mode = 'automatic';
  
      doorButtons.style.display = 'none';
      lightButtons.style.display = 'none';
  
      const currentHour = new Date().getHours();
      const isDaytime = currentHour >= 6 && currentHour < 18;
  
      if (isDaytime) {
        doorStatusElement.textContent = 'It\'s daytime, the door is open.';
        lightStatusElement.textContent = 'It\'s daytime, the lights are off.';
      } else {
        doorStatusElement.textContent = 'It\'s nighttime, the door is closed.';
        lightStatusElement.textContent = 'It\'s nighttime, the lights are on.';
      }
  
      // Update the clock, countdown, and food status every second
      setInterval(updateClock, 1000);
      setInterval(updateCountdown, 1000);
      setInterval(updateFoodStatusBar, 1000); // Update food status every second
  
      // Initial call to update the clock, countdown, and food status
      updateClock();
      updateCountdown();
      updateFoodStatusBar();
      

// AC Control Functions

// Function to get temperature from OpenWeatherMap API
async function getTemperature() {
  const apiUrl = 'your_temperature_api_url'; // replace with your actual temperature API endpoint
  try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const temperature = data.main.temp;

      // Update the temperature display
      document.getElementById('temperature').innerHTML = `Current Temperature: ${temperature} °F`;

      // Automatically control the heater and fan based on temperature (adjust the threshold as needed)
      if (temperature > 75) {
          turnOnFan();
      } else {
          turnOffFan();
      }

      if (temperature < 60) {
          turnOnHeater();
      } else {
          turnOffHeater();
      }
  } catch (error) {
      console.error('Error fetching temperature:', error);
  }
}

// Function to toggle the heater
function toggleHeaterAutomatic() {
  // Add logic to toggle automatic mode for the heater
  const heaterStatus = document.getElementById('HeaterStatus');
  heaterStatus.value = heaterStatus.value === 'Automatic Mode' ? 'Manual Mode' : 'Automatic Mode';
}

// Function to toggle the fan
function toggleFanAutomatic() {
  // Add logic to toggle automatic mode for the fan
  const fanStatus = document.getElementById('FanStatus');
  fanStatus.value = fanStatus.value === 'Automatic Mode' ? 'Manual Mode' : 'Automatic Mode';
}

// Function to turn on the heater
function turnOnHeater() {
  document.getElementById('HeaterStatus').value = 'Heater is On';
  // Add logic to turn on the heater (e.g., send a signal to a hardware device)
}

// Function to turn off the heater
function turnOffHeater() {
  document.getElementById('HeaterStatus').value = 'Heater is Off';
  // Add logic to turn off the heater (e.g., send a signal to a hardware device)
}

// Function to toggle the fan
function toggleFan() {
  const fanStatus = document.getElementById('FanStatus');
  if (fanStatus.value === 'Fan is On') {
      turnOffFan();
  } else {
      turnOnFan();
  }
}

// Function to turn on the fan
function turnOnFan() {
  document.getElementById('FanStatus').value = 'Fan is On';
  // Add logic to turn on the fan (e.g., send a signal to a hardware device)
}

// Function to turn off the fan
function turnOffFan() {
  document.getElementById('FanStatus').value = 'Fan is Off';
  // Add logic to turn off the fan (e.g., send a signal to a hardware device)
}

// Fetch temperature on page load
getTemperature();
// Fetch temperature every 5 minutes (adjust the interval as needed)
setInterval(getTemperature, 300000);