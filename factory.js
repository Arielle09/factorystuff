var app = angular.module('myMod');

app.factory('myFactory', function() {

  console.log('factory is working');

  var myObj = {};

  var getInfo = function(ourMessage) {

    console.log('getInfo function is working ' + ourMessage);

    myObj.personName = ourMessage;

  }

  var sendInfo = function() {

    return myObj;

  }

  return {

    getInfo: getInfo,
    sendInfo: sendInfo

  };


})
