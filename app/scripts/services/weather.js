'use strict';

angular.module('inkApp')
  .service('Weather', ['$http', function Weather($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getCurrentWeather = function (cityName, callback) {
      if (!cityName) {
        throw new Error('No cityName supplied to getCurrentWeather.');
      }

      var url = 'http://api.openweathermap.org/data/2.5/weather', query = '';
      if (cityName) {
        query = '?q=' + cityName + ',GB';
      }

      return $http.get(url + query).success(function (data) {
        var weather = data.weather && data.weather[0] || {};

        var currentCity = {
          'name': data.name,
          'location': data.coord.lat + ', ' + data.coord.lon,
          'weatherConditions': weather.description,
          'icon': 'http://openweathermap.org/img/w/' + weather.icon + '.png',
          'temperature': data.main.temp - 273.15,
          'temperatureMin': data.main['temp_min'] - 273.15,
          'temperatureMax': data.main['temp_max'] - 273.15,
          'atmosphericPressure': data.main.pressure,
          'humidity': data.main.humidity,
        };
        callback(currentCity);
      });
    };
  }]);
