(function(){
    'use strict';
    var app=angular.module('app').component('author',{
        templateUrl:'booksystem/author.component.html',
        controller:'authorCtrl',
        controllerAs:'vm'
    }).controller('authorCtrl',function($http){
        var vm =this;
        var search='';
        var pos;
        vm.pageSize=10;
        vm.currentPage=1;
        vm.showAdd=false;
        vm.newAuthor;
        
            $http.get("../books.json").then(function (response) {
                vm.data = response.data;
            });
            debugger
       
     // remove the selected row
     vm.DeleteData = function (emp) {  
        
      var _index = vm.data.indexOf(emp);  
      vm.data.splice(_index, 1);  
  } 
  // add New Author
  vm.addNew=function(){
      var newAuthor={
          'author':vm.newAuthor
      }
      debugger;
      vm.data.push(newAuthor);
  }
  // update User Data
//   vm.updateRow=function(emp){

//   }
    });
})();