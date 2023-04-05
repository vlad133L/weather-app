import Weather from '../models/weather.js';
export class WeatherRepository {
	async create(response) {
		const weatherData = new Weather(response);
		weatherData.save();
	}
	async get(lon, lat) {
		const weatherData = await Weather.findOne({ coord: { lon, lat } });
		return weatherData;
	}
	async update(lon, lat, response) {
		await Weather.findOneAndUpdate(
			{
				lon,
				lat,
			},
			{
				$set: {
					...response,
				},
			},
		);
	}
}
