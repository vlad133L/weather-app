import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import weatherRoute from './routes/weatherRouter.js';

const app = express();
dotenv.config();
mongoose.set('strictQuery', true);

// Constants
const { PORT } = process.env;
const { DB_USER } = process.env;
const { DB_PASSWORD } = process.env;
const { DB_NAME } = process.env;

// Middleware
app.use(cors());
app.use('/api/weather', weatherRoute);

async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.nuw4xcd.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
    );
    app.listen(PORT, () => {
      console.log('Server has been started');
    });
  } catch (err) {
    console.log(err);
  }
}

start();
