import { weatherDescriptionEnum } from "../constants.js";

export class WeatherService{
	changeTextContent(selector, text){ 
		document.querySelector(selector).textContent = text; 
	}

	showCountry(country){
		const INFO_COUNTRY_SELECTOR = '.weather__info-country';
		const textContent = `Country: ${country}`;
		this.changeTextContent(INFO_COUNTRY_SELECTOR,textContent)
	}

	showCity(city){
		const INFO_CITY_SELECTOR = '.weather__info-city';
		const textContent = `City: ${city}`;
		this.changeTextContent(INFO_CITY_SELECTOR,textContent)
	}

	showTemperature(temperature){
		const INFO_TEMPERATURE_SELECTOR = '.weather__info-temperature';
		const textContent = `Temperature: ${temperature} °C`;
		this.changeTextContent(INFO_TEMPERATURE_SELECTOR,textContent);
		
	}

	showDescription(description){
		const INFO_DESCRIPTION_SELECTOR = '.weather__info-description';
		const textContent = description;
		const INFO_DESCRIPTION_IMAGE = document.querySelector('.weather__info-image')
		this.changeTextContent(INFO_DESCRIPTION_SELECTOR,textContent);

	//   Картинка погоды
	  switch(description){
		case weatherDescriptionEnum.CLOUDS:
			INFO_DESCRIPTION_IMAGE.src = './images/cloud.png';
			break;
		case weatherDescriptionEnum.RAIN:
			INFO_DESCRIPTION_IMAGE.src = './images/rain.png';
			break;
		case weatherDescriptionEnum.CLEAR:
			INFO_DESCRIPTION_IMAGE.src = './images/clear-sky.png';
			break;
	  }
	}
}

