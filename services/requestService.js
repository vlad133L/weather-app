export class RequestService {
	async getData(latitude, longitude) {
		const data = await fetch(
			`https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`,
		);
		const response = await data.json();
		return response;
	}
}
