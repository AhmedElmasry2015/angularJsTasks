(function(){
    'use strict';
    angular.module('app').component('main',{
        templateUrl:'booksystem/main.component.html',
        controller:'mainCtrl',
        controllerAs:'vm'
    }).controller('mainCtrl',function($http){
        var vm =this;
        var search="";
        var pos;
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
                    'author':vm.newAuthor,
                    'title':vm.book,
                    'country':vm.category
                }
                debugger;
                vm.data.push(newAuthor);
            }
    })
})();