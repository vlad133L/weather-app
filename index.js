import {WeatherService} from "./services/weatherService.js";
import {WeatherResource} from "./services/weatherResource.js";


const citiesCoords = {
  'Minsk' : {latitude:53.893009,longitude:27.567444},
  'Moscow' : {latitude:55.751244,longitude:37.618423},
  'Lviv' : {latitude:49.842957,longitude:24.031111},
  'Riga' : {latitude:56.966662,longitude:24.106422},
  'Warsaw' : {latitude:52.237049,longitude:21.017532},
}
const form = document.querySelector('.weather__form');

const  main = async () => {
  const weatherInfo = new WeatherResource();
  const weatherService = new WeatherService();
  const selectedCity = weatherService.selectCity();
  
  const data = await weatherInfo.get(citiesCoords[selectedCity].latitude,citiesCoords[selectedCity].longitude);
  weatherService.showCountry(data.sys.country);
  weatherService.showCity(data.name);
  weatherService.showTemperature(data.main.temp);
  weatherService.showDescription(data.weather[0].main);
}
// Погода  после загрузки страницы
window.addEventListener('load',main);

form.addEventListener('submit', (event) =>{
  event.preventDefault();
  main();
})
