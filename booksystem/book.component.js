(function(){
    'use strict';
    angular.module('app').component('book',{
        templateUrl:'booksystem/book.component.html',
          
        controller:'bookCtrl',
        controllerAs:'vm'
    }).controller('bookCtrl',function($http){
        var vm =this;
            $http.get("../books.json").then(function (response) {
                vm.data = response.data;
            });
        
    })
})();