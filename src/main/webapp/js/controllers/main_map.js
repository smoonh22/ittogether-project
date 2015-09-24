//define([
//    'jquery',
//    'angular',
//    'bootstrap.min'
//  ], function($, angular) {
//    console.log('dd');
//  return {
//   init: function() { var app = angular.module('main_map', []);
//
//    app.controller('mainMapCtrl', ['$http', '$scope', function($http, $scope) {
//      var parent_scope = this;
//      $http.get('member/markFriend.do',
//      {
//        params: {
//          mno: sessionStorage.getItem('mno')
//        }
//      }).success(function(result){
//        console.log(result.data);
//        parent_scope.friends = result.data;
//      });
//    }]);
//                    }
//};
//});


define(function() {
  
  var app = angular.module('main_map', []);
    console.log(app);
    console.log('나온다1');
  
    app.controller('aCtrl', ['$http', function($http) {
      var parent_scope = this;
      console.log('나온다2');
      $http.get('member/markFriend.do',
      {
        params: {
          mno: sessionStorage.getItem('mno')
        }
      }).success(function(result){
        console.log('hahaha');
        console.log(result.data);
        parent_scope.friends = result.data;
      });
  
}]);
});