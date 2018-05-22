(function(){
    'use strict';
    var app=angular.module('app').component('author',{
        templateUrl:'booksystem/author.component.html',
        controller:'authorCtrl',
        controllerAs:'vm'
    }).controller('authorCtrl',function($http){
        var vm =this;
            $http.get("../books.json").then(function (response) {
                vm.data = response.data;
            });
        
    })
})();