(function() {
  var myapp = angular.module('MyApp', []);
  
  myapp.controller('myAct',['$http', function($http) {
    var a = this;
    $http.get('feed/list.do').success(function(result){
      
      a.tests = result.data;
      console.log(result.data);
    });
  }]);

})();