'use strict';

angular.module('inkApp')
  .controller('MainCtrl', ['$scope', 'Weather', function ($scope, weatherService) {
    var changeCity = function changeCity(cityName) {
      $scope.selectedCity = cityName;

      weatherService.getCurrentWeather($scope.selectedCity, function (data) {
        $scope.currentCity = data;
      });
    };

    $scope.cities = [
      'London',
      'Birmingham',
      'Luton',
      'Manchester'
    ];
    changeCity('London');

    $scope.changeCity = changeCity;
  }]);
