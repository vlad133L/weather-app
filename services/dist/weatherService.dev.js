"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WeatherService = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WeatherService =
/*#__PURE__*/
function () {
  function WeatherService() {
    _classCallCheck(this, WeatherService);
  }

  _createClass(WeatherService, [{
    key: "selectCity",
    value: function selectCity() {
      return document.querySelector('.weather__select').value;
    }
  }, {
    key: "showCountry",
    value: function showCountry(country) {
      document.querySelector('.weather__info-country').textContent = "Country: ".concat(country);
    }
  }, {
    key: "showCity",
    value: function showCity(city) {
      document.querySelector('.weather__info-city').textContent = "City: ".concat(city);
    }
  }, {
    key: "showTemperature",
    value: function showTemperature(temperature) {
      document.querySelector('.weather__info-temperature').textContent = "Temperature: ".concat(temperature, " \xB0C");
    }
  }, {
    key: "showDescription",
    value: function showDescription(description) {
      document.querySelector('.weather__info-description').textContent = description;
      var descriptionImage = document.querySelector('.weather__info-image'); //   Картинка погоды

      switch (description) {
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
  }]);

  return WeatherService;
}();

exports.WeatherService = WeatherService;