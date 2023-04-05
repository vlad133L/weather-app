import Weather from '../models/weather.js';
import { WeatherService } from '../services/weatherService.js';

export const getWeather = async (req, res) => {
	try {
		const { lon, lat } = req.query;
		const weatherService = new WeatherService();
		const response = await weatherService.get(Number(lon), Number(lat));
		res.json(response);
	} catch (err) {
		res.json({ message: 'Ошибка при получении погоды' + ' ' + err });
	}
};

// `https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`,
