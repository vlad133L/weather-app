import { WeatherService } from './services/weatherService.js';
import { WeatherResource } from './services/weatherResource.js';
import { baseUrl } from './constants.js';

const form = document.querySelector('.weather__form');

const main = async () => {
  const weatherResource = new WeatherResource(baseUrl);
  const weatherService = new WeatherService();
  const data = await weatherResource.get();
  weatherService.show(
    data.country,
    data.city,
    data.temperature,
    data.description
  );
};
// Погода  после загрузки страницы
window.addEventListener('load', main);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  main();
});
