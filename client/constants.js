const cityEnum = {
  MINSK: 'Minsk',
  LVIV: 'Lviv',
  MOSCOW: 'Moscow',
  RIGA: 'Riga',
  WARSAW: 'Warsaw',
};
export const citiesCoords = {
  [cityEnum.MINSK]: { latitude: 53.893, longitude: 27.5674 },
  [cityEnum.MOSCOW]: { latitude: 37.6184, longitude: 37.6184 },
  [cityEnum.LVIV]: { latitude: 49.842, longitude: 24.0311 },
  [cityEnum.RIGA]: { latitude: 56.9667, longitude: 24.1064 },
  [cityEnum.WARSAW]: { latitude: 52.237, longitude: 21.0175 },
};
export const weatherDescriptionEnum = {
  CLOUDS: 'Clouds',
  RAIN: 'Rain',
  CLEAR: 'Clear',
};
export const baseUrl = 'http://localhost:5000/api/weather/';
