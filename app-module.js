(
    function(){
        'use strict';
        var app=angular.module('app',['ui.router','ui.bootstrap','ngTable']);
        app.config(function($stateProvider){
            var states=[{
                name:'home',
                url:'',
                template:'<main></main>'
             
            },
            {
                name:'author',
                url:'/author',
                template:'<author></author>'
               
            },{
                name:'book',
                url:'/book',
                template:'<book></book>'
               
            },{
                name:'category',
                url:'/category',
                template:'<category></category>'
               
            }
            ];
            states.forEach(function(state){
                $stateProvider.state(state);
            });
           
        });

        app.filter('startFrom',function(){
            return function(data,start){
                return data.slice(start);
            }
        })
    })();