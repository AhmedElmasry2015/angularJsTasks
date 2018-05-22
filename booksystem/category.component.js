(function(){
    'use strict';
    angular.module('app').component('category',{
        templateUrl:'booksystem/category.component.html',
        controller:'categoryCtrl',
        controllerAs:'vm'
    }).controller('categoryCtrl',function($http){
        var vm =this;
            $http.get("../books.json").then(function (response) {
                vm.data = response.data;
            });
        
        
    })
})();