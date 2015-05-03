(function(){
 
    var app = angular.module("header", []);
       
    app.directive('header', function(){
       return {
         restrict: 'AE',
         templateUrl: '/templates/header.html'
       };
    });
 
 })();
