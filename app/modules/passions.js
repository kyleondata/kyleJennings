(function(){
    
    var app = angular.module('passions', []);
    
    app.directive('passions', function(){
       return {
         restrict: 'E',
         templateUrl: '/app/templates/passions.html'
       };
    });
    
})();