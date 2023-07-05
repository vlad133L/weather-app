import dotenv from 'dotenv';

dotenv.config();

const { DB_PASSWORD, DB_NAME, DB_USER } = process.env;
export const { PORT } = process.env;
export const WEATHER_API_URL = 'https://fcc-weather-api.glitch.me/api/current/';
export const DATABASE_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.nuw4xcd.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
