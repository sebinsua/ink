'use strict';

angular.module('inkApp')
  .service('Weather', ['$http', function Weather($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getCurrentWeather = function (cityName, successCallback, errorCallback) {
      if (!cityName) {
        throw new Error('No cityName supplied to getCurrentWeather.');
      }

      var url = 'http://api.openweathermap.org/data/2.5/weather', query = '';
      if (cityName) {
        var countryName = 'GB';
        query = '?q=' + cityName + ',' + countryName;
      }

      return $http.get(url + query).success(function (data) {
        var weather = data.weather && data.weather[0] || {};

        var currentCity = {
          'name': data.name,
          'location': data.coord.lat + ', ' + data.coord.lon,
          'weatherConditions': weather.description,
          'icon': 'http://openweathermap.org/img/w/' + weather.icon + '.png',
          'temperature': (data.main.temp - 273.15).toFixed(2),
          'temperatureMin': (data.main['temp_min'] - 273.15).toFixed(2),
          'temperatureMax': (data.main['temp_max'] - 273.15).toFixed(2),
          'atmosphericPressure': data.main.pressure,
          'humidity': data.main.humidity,
          'clouds': data.clouds.all,
          'windSpeed': data.wind.speed,
          'windAngle': data.wind.deg
        };
        successCallback(currentCity);
      }).error(errorCallback);
    };
  }]);
