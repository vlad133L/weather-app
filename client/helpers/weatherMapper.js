export function weatherMapper(data) {
	return {
		country: data.sys.country,
		city: data.name,
		temperature: data.main.temp,
		description: data.weather[0].main,
	};
}
