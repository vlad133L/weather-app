export class WeatherService{
	selectCity(){
		return document.querySelector('.weather__select').value;
	}
	showCountry(country){
	  document.querySelector('.weather__info-country').textContent = `Country: ${country}`;
	}
	showCity(city){
	  document.querySelector('.weather__info-city').textContent = `City: ${city}`;
	}
	showTemperature(temperature){
	  document.querySelector('.weather__info-temperature').textContent = `Temperature: ${temperature} °C`;
	}
	showDescription(description){
	  document.querySelector('.weather__info-description').textContent = description;
	  const descriptionImage = document.querySelector('.weather__info-image');

	//   Картинка погоды
	  switch(description){
		case 'Clouds':
			descriptionImage.src = './images/cloud.png';
			break;
		case 'Rain':
			descriptionImage.src = './images/rain.png';
			break;
		case 'Clear':
			descriptionImage.src = './images/clear-sky.png';
			break;
	  }
	}
}