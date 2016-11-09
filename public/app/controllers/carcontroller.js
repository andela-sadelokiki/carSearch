angular.module('iSearch')
  .controller('CarCtrl', ['$scope', 'CarService', function($scope, CarService) {
    console.log("jkfbkjbe")
    $scope.cars = [];

    $scope.getCars = function() {
      CarService.getCars().then(function(res) {
        $scope.cars = res.data;
        console.log($scope.cars);
      }, function(err) {});
    }
    $scope.getCars();

    console.log($scope.cars, "sjbskj");
    $scope.createCar = function() {
      CarService.createCar($scope.car).then(function(res) {
        $scope.cars.push(res.data);
      }, function(err) {});
    }

  }])