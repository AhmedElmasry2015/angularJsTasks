(function(){
    'use strict';
    angular.module('app').component('category',{
        templateUrl:'booksystem/category.component.html',
        controller:'categoryCtrl',
        controllerAs:'vm'
    }).controller('categoryCtrl',function($http){
        var vm =this;
        var search='';
        vm.pageSize=10;
        vm.currentPage=1;
            $http.get("../books.json").then(function (response) {
                vm.data = response.data;
            });
    
            vm.DeleteData = function (emp) {  
                debugger
              var _index = vm.data.indexOf(emp);  
              vm.data.splice(_index, 1);  
          } 
          vm.addNew=function(){
            var newAuthor={
                'country':vm.newAuthor
            }
            debugger;
            vm.data.push(newAuthor);
        }
    })
})();