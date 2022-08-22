import {citiesCoords} from '../constants.js';

export class WeatherResource{
	constructor(baseUrl){
		this.baseUrl = baseUrl;
	}
	
	async get(){
		 const selectedCity = document.querySelector('.weather__select').value;
		 const selectedCityCoords = citiesCoords[selectedCity];
	  try{
		 const response = await fetch(`${this.baseUrl}/api/current?lat=${selectedCityCoords.latitude}&lon=${selectedCityCoords.longitude}`);
		 const data = await response.json();
		 return {
			'country' : data.sys.country,
			'city' : data.name,
			'temperature' : data.main.temp,
			'description' : data.weather[0].main
		 };
	  }catch(err){
		 console.error(err);
	  }
	}
 }

