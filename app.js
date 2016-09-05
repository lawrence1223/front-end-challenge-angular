(function(angular){

  'use strict';

  var app = angular.module("touchOfModern", ["ngAnimate"]);
  app.controller("touchCtrl",['$scope', '$http', function($scope, $http) {
    $scope.loading = true;

// to see the loading animation, just inject $timeout
  $http.get('data.json').then(function(data) {
    $scope.products = data.data.sales;
    $scope.loading = false;
  });

    $scope.removeHandler = function(index){
      $scope.products.splice(index, 1);
    };
  }]);

  app.directive("slickProduct", function(){
    return {
      restrict: 'E',
      scope: {
        product: '=', //product information
        index: '=',
        removeHandler: '&'
      },
      templateUrl: 'product.html',
    };

  });
})(window.angular);
