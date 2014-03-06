'use strict';

angular.module('inkApp')
  .controller('MainCtrl', ['$scope', 'Weather', function ($scope, weatherService) {
    var changeCity = function changeCity(cityName) {
      $scope.selectedCity = cityName;
      $scope.loading = true;

      weatherService.getCurrentWeather($scope.selectedCity, function success(data) {
        $scope.loading = false;
        $scope.error = false;
        $scope.currentCity = data;
      }, function error() {
        $scope.loading = false;
        $scope.error = true;
      });
    };

    $scope.loading = false;
    $scope.error = false;
    $scope.selectedCity = 'London';
    $scope.cities = [
      'London',
      'Birmingham',
      'Luton',
      'Manchester'
    ];
    changeCity('London');

    $scope.changeCity = changeCity;
  }]);
