import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import weatherRoute from './routes/weatherRouter.js';
const app = express();
dotenv.config();
mongoose.set('strictQuery', true);

// Constants
const PORT = process.env.PORT;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

//Middleware
app.use(cors());
app.use('/api/weather', weatherRoute);

// async function handleRequest(req, res) {
// 	const collection = req.app.locals.collection;
// 	const { lat, lon } = req.query;
// 	const requestService = new RequestService();
// 	const coord = {
// 		lon: Number(lon),
// 		lat: Number(lat),
// 	};
// 	try {
// 		const response = await requestService.getData(lat, lon);
// 		// Получаем объект города из бд, если он там есть
// 		const cityWeatherInfo = await collection.findOne({
// 			coord,
// 		});
// 		//Если города в бд нет, то делаем запрос к API
// 		if (!cityWeatherInfo) {
// 			//Использовал свою широту и долготу из client/constants.js, т.к немного отличались от API
// 			console.log('added to mongo' + ' ' + new Date());
// 			await collection.insertOne({
// 				...response,
// 				coord,
// 				requestDate: Date.now(),
// 			});
// 			res.send(response);
// 		} else {
// 			// Если прошло больше 5 минут
// 			// Запрос к API за новыми данными
// 			if (timeDifference(cityWeatherInfo.requestDate) > 1) {
// 				console.log('More than 1 minute' + ' ' + new Date());
// 				await collection.findOneAndUpdate(
// 					{
// 						coord,
// 					},
// 					{
// 						$set: {
// 							...response,
// 							coord,
// 							requestDate: Date.now(),
// 						},
// 					},
// 				);
// 				return res.send(response);
// 			}
// 			console.log('Less than 1 minute' + ' ' + new Date());
// 			res.send(cityWeatherInfo);
// 		}
// 	} catch (err) {
// 		console.log(err);
// 	}
// }

async function start() {
	try {
		await mongoose.connect(
			`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.nuw4xcd.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
		);
		app.listen(PORT, () => {
			console.log('Server has been started');
		});
	} catch (err) {
		console.log(err);
	}
}

start();
