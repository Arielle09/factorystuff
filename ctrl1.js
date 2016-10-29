app.controller('myCtrl', function($scope, myFactory) {


  $scope.greeting = function(name) {

    console.log('greeting function is working');

    $scope.message = name;
    console.log($scope.message);

    myFactory.getInfo($scope.message);

  }

})
