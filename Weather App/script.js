//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi = {
    key: "b12af82e1ede3a103bf3211ef2fb93ed",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}

//Event listner Function on keypress

const searchInputBox = document.getElementById('input-box');

searchInputBox.addEventListener('keypress',(event) => {

    if(event.keyCode == 13)
    {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }
   
});

//Get Weather Report

function getWeatherReport(city)
{
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather =>{
        return weather.json();
    }).then(showWeatherReport);
}

//Show weather report

function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name},${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let min_max_temp = document.getElementById('min-max');
    min_max_temp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C / ${Math.ceil(weather.main.temp_max)}&deg;C`;

    let weather_type = document.getElementById('weather');
    weather_type.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let today = new Date();
    date.innerText = dateManage(today);

    if(weather_type.textContent == 'Clear')
    {
        document.body.style.backgroundImage = "url('images/clear.jpg')";
    }

    else if(weather_type.textContent == 'Clouds')
    {
        document.body.style.backgroundImage = "url('images/cloud.jpg')";
    }

    else if(weather_type.textContent == 'Haze')
    {
        document.body.style.backgroundImage = "url('images/haze.jpg')";
    }

    else if(weather_type.textContent == 'Rain')
    {
        document.body.style.backgroundImage = "url('images/rainy.jpg')";
    }

    else if(weather_type.textContent == 'Snow')
    {
        document.body.style.backgroundImage = "url('images/snow.jpg')";
    }

    else if(weather_type.textContent == 'Sunny')
    {
        document.body.style.backgroundImage = "url('images/sunny.jpg')";
    }

    else if(weather_type.textContent == 'Smoke')
    {
        document.body.style.backgroundImage = "url('images/smoke.jpg')";
    }

    else if(weather_type.textContent == 'Thunderstrome')
    {
        document.body.style.backgroundImage = "url('images/thunder.jpg')";
    }

    else if(weather_type.textContent == 'Mist')
    {
        document.body.style.backgroundImage = "url('images/mist.jpg')";
    }

} 

//Date manage
function dateManage(dateArg)
{
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday",
"Saturday","Sunday"];

    let months = ["January","February","March","April","May","June","July","August", "September","October","November","December"];

    let date = dateArg.getDate();

    let day = days[dateArg.getDay()];
    
    let month = months[dateArg.getMonth()];

    let year = dateArg.getFullYear();

 
    return `${date} ${month} (${day}), ${year}`;
    
}




