import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import { DEFAULT_PORT, mongoURL } from './constants.js';
import { RequestService } from './services/requestService.js';
import { timeDifference } from './utils/timeDifference.js';

const PORT = process.env.PORT || DEFAULT_PORT;
const app = express();
app.use(cors());
const mongoClient = new MongoClient(mongoURL);

(async () => {
	try {
		await mongoClient.connect();
		app.locals.collection = mongoClient.db('weather').collection('cities');
		app.listen(PORT);
	} catch (err) {
		console.log(err);
	}
})();

app.get('/', handleRequest);

async function handleRequest(req, res) {
	const collection = req.app.locals.collection;
	const { lat, lon } = req.query;
	const requestService = new RequestService();
	const coord = {
		lon: Number(lon),
		lat: Number(lat),
	};
	try {
		const response = await requestService.getData(lat, lon);
		// Получаем объект города из бд, если он там есть
		const cityWeatherInfo = await collection.findOne({
			coord,
		});
		//Если города в бд нет, то делаем запрос к API
		if (!cityWeatherInfo) {
			//Использовал свою широту и долготу из client/constants.js, т.к немного отличались от API
			console.log('added to mongo' + ' ' + new Date());
			await collection.insertOne({
				...response,
				coord,
				requestDate: Date.now(),
			});
			res.send(response);
		} else {
			// Если прошло больше 5 минут
			// Запрос к API за новыми данными
			if (timeDifference(cityWeatherInfo.requestDate) > 1) {
				console.log('More than 1 minute' + ' ' + new Date());
				await collection.findOneAndUpdate(
					{
						coord,
					},
					{
						$set: {
							...response,
							coord,
							requestDate: Date.now(),
						},
					},
				);
				return res.send(response);
			}
			console.log('Less than 1 minute' + ' ' + new Date());
			res.send(cityWeatherInfo);
		}
	} catch (err) {
		console.log(err);
	}
}
