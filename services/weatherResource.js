export class WeatherResource{
	async get(latitude,longitude){
	  try{
		 const response = await fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`);
		 const data = await response.json();
		 return data;
	  }catch(err){
		 console.error(err);
	  }
	}
 }