import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import weatherRoute from './routes/weatherRouter.js';
import { DATABASE_URL } from './constants.js';

const app = express();
dotenv.config();
mongoose.set('strictQuery', true);

// Constants
const { PORT, NODE_ENV } = process.env;

// Middleware
app.use(cors());
app.use('/api/weather', weatherRoute);

async function start() {
  try {
    if (NODE_ENV === 'development') {
      await mongoose.connect(DATABASE_URL);
      app.listen(PORT, () => {
        console.log('Server has been started');
      });
    }
  } catch (err) {
    console.log(err);
  }
}

start();
