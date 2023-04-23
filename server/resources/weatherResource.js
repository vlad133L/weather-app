import { WEATHER_API_URL } from '../constants.js';

export class WeatherResource {
  async get(lon, lat) {
    const response = await fetch(`${WEATHER_API_URL}?lat=${lat}&lon=${lon}`);
    return response.json();
  }
}
