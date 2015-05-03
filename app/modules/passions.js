(function(){
    
    var app = angular.module('passions', []);
    
    app.directive('passions', function(){
       return {
         restrict: 'E',
         templateUrl: '/templates/passions.html'
       };
    });
    
})();
