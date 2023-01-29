const cityEnum = {
	MINSK: 'Minsk',
	LVIV: 'Lviv',
	MOSCOW: 'Moscow',
	RIGA: 'Riga',
	WARSAW: 'Warsaw',
};
export const citiesCoords = {
	[cityEnum.MINSK]: { latitude: 53.893009, longitude: 27.567444 },
	[cityEnum.MOSCOW]: { latitude: 55.751244, longitude: 37.618423 },
	[cityEnum.LVIV]: { latitude: 49.842957, longitude: 24.031111 },
	[cityEnum.RIGA]: { latitude: 56.966662, longitude: 24.106422 },
	[cityEnum.WARSAW]: { latitude: 52.237049, longitude: 21.017532 },
};
export const weatherDescriptionEnum = {
	CLOUDS: 'Clouds',
	RAIN: 'Rain',
	CLEAR: 'Clear',
};
export const headersEnum = {
	CONTENT_TYPE: 'application/json',
	ACCESS_CONTROL_ALLOW_ORIGIN: '*',
	ACCESS_CONTROL_ALLOW_METHODS: 'OPTIONS, POST, GET',
};
export const baseUrl = 'http://localhost:5000';
export const DEFAULT_PORT = 5000;
