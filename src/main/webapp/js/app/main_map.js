define(function() {
  var app = angular.module('mainMap', ['main']);
  
  app.controller('myMapCtrl', ['$http','$scope','$rootScope', function($http, $scope, $rootScope){
    console.log('mainMap');
    $rootScope.friends = "data";
    $rootScope.$apply();
  }]);
  }, function (result) {
    patent_scope.userDatas = result.data;
  
    var data = {
        nickname : 'aaa',
        latitude: '123.232',
        longitude: '123, 23'
    };
    console.log(data.nickname + 'ddd');
});
