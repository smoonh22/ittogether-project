(function() {
  var app = angular.module('mainMap', []);
  
  app.controller('myMapCtrl', ['$http', function(result){
    console.log("테스트");
    this.friends = data;
  }]);
    
    var data = {
        nickname: 'ab',
        longitude: '3',
        latitude: '4'
    };
})();