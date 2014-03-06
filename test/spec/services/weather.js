'use strict';

describe('Service: Weather', function () {

  // load the service's module
  beforeEach(module('inkApp'));

  // instantiate service
  var Weather;
  beforeEach(inject(function (_Weather_) {
    Weather = _Weather_;
  }));

  it('should do something', function () {
    expect(!!Weather).toBe(true);
  });

  it('should throw an error if you do not pass in a cityName', function () {
    expect(Weather.getCurrentWeather).toExist();
    expect(function () {
      Weather.getCurrentWeather();
    }).toThrow();
  });

});
