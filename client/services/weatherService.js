import { weatherDescriptionEnum } from '../constants.js';

export class WeatherService {
  changeTextContent(selector, text) {
    document.querySelector(selector).textContent = text;
  }

  show(country, city, temperature, description) {
    const INFO_COUNTRY_SELECTOR = '.weather__info-country';
    const textCountryContent = `Country: ${country}`;
    this.changeTextContent(INFO_COUNTRY_SELECTOR, textCountryContent);
    const INFO_CITY_SELECTOR = '.weather__info-city';
    const textCityContent = `City: ${city}`;
    this.changeTextContent(INFO_CITY_SELECTOR, textCityContent);
    const INFO_TEMPERATURE_SELECTOR = '.weather__info-temperature';
    const textTemperatureContent = `Temperature: ${temperature} °C`;
    this.changeTextContent(INFO_TEMPERATURE_SELECTOR, textTemperatureContent);
    const INFO_DESCRIPTION_SELECTOR = '.weather__info-description';
    const textDescriptionContent = description;
    const INFO_DESCRIPTION_IMAGE = document.querySelector(
      '.weather__info-image'
    );
    this.changeTextContent(INFO_DESCRIPTION_SELECTOR, textDescriptionContent);
    //   Картинка погоды
    switch (description) {
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
