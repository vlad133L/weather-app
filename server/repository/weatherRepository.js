/* eslint-disable class-methods-use-this */
import Weather from '../models/weather.js';

export class WeatherRepository {
  async create(weatherPayload) {
    const weatherData = new Weather(weatherPayload);
    weatherData.save();
  }

  async get(lon, lat) {
    const weatherData = await Weather.findOne({ coord: { lon, lat } });
    return weatherData;
  }

  async update(lon, lat, weatherPayload) {
    await Weather.findOneAndUpdate(
      {
        lon,
        lat,
      },
      {
        $set: {
          ...weatherPayload,
        },
      }
    );
  }
}
