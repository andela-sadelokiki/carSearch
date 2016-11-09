angular.module('iSearch')
  .factory('CarService', ['$http', 'baseUrl', function($http, baseUrl) {
    var Car = {
      createCar: function() {
        return $http.post(baseUrl + '/api', car)
      },

      getCars: function() {
        return $http.get(baseUrl + '/api')
      }
    }
    return Car;
  }])