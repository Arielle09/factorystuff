var app = angular.module('myMod', ['ngRoute']);

app.config(function($routeProvider) {

  $routeProvider
    .when('/', {
      controller: 'myCtrl',
      templateUrl: 'view1'

    })
    .when('/view2', {
      controller: 'myCtrlTwo',
      templateUrl: 'view2'

    })

});
