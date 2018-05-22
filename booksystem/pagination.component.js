(function(){

    'use strict';
    angular.module('app').component('pagination',{

        templateUrl:'booksystem/pagination.component.html',
        controller:'basicExampleCtrl'
       // controllerAs:vm

    }).controller("basicExampleCtrl", ["$scope",'$http', function($scope) {
        $http.get("../books.json").then(function (response) {
            $scope.data = response.data;
        });
        $scope.list = $scope.$parent.data
        $scope.config = {
          itemsPerPage: 5,
          fillLastPage: true
        }
      }]);
}
)();