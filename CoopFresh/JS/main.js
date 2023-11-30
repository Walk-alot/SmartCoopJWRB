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

    if (strUsername == '') {
        blnError = true;
        strErrorMessage += '<p> Email cannot be blank. </p>';
    }
    if (strPassword == '') {
        blnError = true;
        strErrorMessage += '<p> Password cannot be blank. </p>';
    }
    if (blnError == true) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            html: strErrorMessage
            });
    }

    if(blnError == false)
    {
        $('#divLogin').slideUp()
        $('#Dashboard').slideDown()
        $('#btnMyAccountToggle').show()
        $('#btnNavLogout').show()
        $('#btnNavLogin').hide()
        $('#weatherInfo').show()
    }
})

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

    if(strRegEmail == ''){
        blnError = true;
        strErrorMessage += '<p>Email cannot be blank. </p>';
    }

    if(strRegPassword == ''){
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

    if(strRegAddress1 == ''){
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

    if(strRegZip == ''){
        blnError = true;
        strErrorMessage += '<p>Zip Code cannot be blank. </p>';
    }

    if(strRegPhoneNumber == ''){
        blnError = true;
        strErrorMessage += '<p>Phone Number cannot be blank. </p>';
    }

    if(strRegCoopID == ''){
        blnError = true;
        strErrorMessage += '<p>Coop ID cannot be blank. </p>';
    }

    if(blnError == true){
        Swal.fire({
            icon: 'error',
            title: 'Sorry...',
            html: strErrorMessage
        })
    }

    if(blnError == false){
        $('#divRegister').slideUp()
        $('#Dashboard').slideDown()
        $('#btnMyAccountToggle').show()
        $('#btnNavLogout').show()
        $('#btnNavLogin').hide()
        $('#weatherInfo').show()
    }           
})

// Egg Counter

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

    console.log('Displaying weather...');
}

function displayWeatherError() {
    document.getElementById('weatherInfo').innerHTML = '<h2>Failed to fetch weather data.</h2>';
}

// Fetch weather data initially
getWeather();

// Update weather data every 10 minutes (600,000 milliseconds)
setInterval(getWeather, 10000)
    
// Fetch weather data when the page loads
document.addEventListener('DOMContentLoaded', getWeather);

console.log('Weather last updated at:', new Date());
// End Weather Display