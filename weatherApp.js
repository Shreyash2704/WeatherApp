const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const searchElement = document.querySelector(".search-bar");

//app data
const weather = {};

weather.temperature ={
    unit:"celsius"
}

//app consts and vars
const kelvin = 273;
const key = "584e508e266e5871fa08204068716a2f";


function search(){
    let query = document.getElementById("search").value;
        console.log(query);
        getWeather(query);
    }

//const query = document.getElementsById(search-bar).value;
function getWeather(query){
    let api = `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${key}`;
    
    fetch(api)
    .then(response => {
        let data = response.json();
       console.log(data);
        return data;
    })
    .then(data =>{
      weather.temperature.value = Math.floor(data.main.temp -kelvin);
      weather.description = data.weather[0].description;
      weather.iconId = data.weather[0].icon;
      weather.city = data.name;
      weather.country = data.sys.country;
    })
    .then( () => { 
        displayWeather();
        query = "";
    });
}
 displayWeather = () =>{
     console.log(weather.iconId);
     iconElement.innerHTML = `<img src="http://api.openweathermap.org/img/w/${weather.iconId}.png"/>`;
     tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
     descElement.innerHTML = weather.description;
     locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}
 



/*const url = "http://api.openweathermap.org/data/2.5/weather?id=524901&units=metric&appid=584e508e266e5871fa08204068716a2f";*/
