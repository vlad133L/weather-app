import {WeatherService} from "./services/weatherService.js";
import {WeatherResource} from "./services/weatherResource.js";

const form = document.querySelector('.weather__form');

const  main = async () => {
  const weatherResource = new WeatherResource('https://fcc-weather-api.glitch.me');
  const weatherService = new WeatherService();
  const data = await weatherResource.get();

  weatherService.showCountry(data.country);
  weatherService.showCity(data.city);
  weatherService.showTemperature(data.temperature);
  weatherService.showDescription(data.description);
}
// Погода  после загрузки страницы
window.addEventListener('load',main);

form.addEventListener('submit', (event) =>{
  event.preventDefault();
  main();
})

