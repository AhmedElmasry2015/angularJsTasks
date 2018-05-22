(function(){
    'use strict';
    angular.module('app').component('main',{
        templateUrl:'booksystem/main.component.html',
        controller:'mainCtrl',
        controllerAs:'vm'
    }).controller('mainCtrl',function($http){
        var vm =this;
            $http.get("../books.json").then(function (response) {
                vm.data = response.data;
            });
        vm.pageSize=5;
        vm.currentPage=1;
    })
})();