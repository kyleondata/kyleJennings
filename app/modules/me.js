(function(){
    
    var app = angular.module('me', []);
    
    app.directive('me', function(){
       return {
         restrict: 'E',
         templateUrl: '/app/templates/me.html'
       };
    });
    
 })();