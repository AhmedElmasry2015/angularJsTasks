(function(){
    'use strict';
    angular.module('app').component('book',{
        templateUrl:'booksystem/book.component.html',
          
        controller:'bookCtrl',
        controllerAs:'vm'
    }).controller('bookCtrl',function($http){
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
          // add New Author
          
  vm.addNew=function(){
    var newAuthor={
        'title':vm.newBook
    }
    debugger;
    vm.data.push(newAuthor);
}
        
    })
})();