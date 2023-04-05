import { WeatherRepository } from '../repository/weatherRepository.js';
import { WeatherResource } from '../resources/weatherResource.js';
import { timeDifference } from '../utils/timeDifference.js';
export class WeatherService {
	async get(lon, lat) {
		try {
			const weatherResource = new WeatherResource();
			const weatherRepository = new WeatherRepository();
			// console.log('1. GETTING WEATHER DATA');
			const weatherData = await weatherRepository.get(lon, lat);
			if (!weatherData) {
				// console.log('2. IF WEATHER DATA DOES NOT EXIST IN DB');
				// console.log('NO DATA IN DB');
				const response = await weatherResource.get(lon, lat);
				await weatherRepository.create(response);
				return response;
			}
			// console.log('3. IF WEATHER DATA EXISTS IN DB');
			if (timeDifference(new Date(), weatherData.updatedAt) > 2) {
				// console.log('2 MIN HAVE PASSED');
				const response = await weatherResource.get(lon, lat);
				await weatherRepository.update(lon, lat, response);
				return response;
			}
			// console.log('2 MIN HAVE NOT PASSED');
			return weatherData;
		} catch (err) {
			console.log(err);
		}
	}
}
