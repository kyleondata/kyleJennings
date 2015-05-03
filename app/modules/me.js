(function(){
    
    var app = angular.module('me', []);
    
    app.directive('me', function(){
       return {
         restrict: 'E',
         templateUrl: '/templates/me.html'
       };
    });
    
 })();
