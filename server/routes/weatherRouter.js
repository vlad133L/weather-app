import { Router } from 'express';
import { getWeather } from '../controllers/weatherController.js';
const router = new Router();

router.get('/', getWeather);

export default router;
