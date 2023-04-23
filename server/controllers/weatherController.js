import weatherService from '../services/weatherService.js';

export const getWeather = async (req, res) => {
  try {
    const { lon, lat } = req.query;
    const response = await weatherService.get(Number(lon), Number(lat));
    res.json(response);
  } catch (err) {
    res.json({ message: `Ошибка при получении погоды ${err}` });
  }
};
