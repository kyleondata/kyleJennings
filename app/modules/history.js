(function(){

    var app = angular.module('history', []);

    app.directive('history', function(){
       return {
         restrict: 'E',
         templateUrl: '/templates/history.js'
       };
    });
 
})();
