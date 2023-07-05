import mongoose from 'mongoose';

const WeatherSchema = new mongoose.Schema(
  {
    coord: {
      lon: Number,
      lat: Number,
    },
    weather: [
      {
        id: Number,
        main: String,
        description: String,
      },
    ],
    base: String,
    main: {
      temp: Number,
      pressure: Number,
      humidity: Number,
      temp_min: Number,
      temp_max: Number,
    },
    visibility: Number,
    clouds: {
      all: Number,
    },
    dt: Number,
    sys: {
      type: { type: Number },
      id: Number,
      country: String,
      sunrise: Number,
      sunset: Number,
    },
    timezone: Number,
    id: Number,
    name: String,
    cod: Number,
  },
  {
    timestamps: true,
  }
);
export default mongoose.model('Weather', WeatherSchema);
