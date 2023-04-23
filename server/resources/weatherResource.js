export class WeatherResource {
  async get(lon, lat) {
    try {
      const response = await fetch(
        `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`
      );
      return response.json();
    } catch (err) {
      console.log(err);
    }
  }
}
