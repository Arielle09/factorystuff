var app = angular.module('myMod');

app.controller('myCtrlTwo', function($scope, myFactory) {

  $scope.snapCracklePop = myFactory.sendInfo();

  

});
