define(function() {
  var app = angular.module('myActivities', []);
    console.log(app);
    console.log(app);
    console.log(app);
    console.log(app);
  
app.controller('activityCtrl', ['$http', function($http) {
    var parent_scope = this;
    console.log('나온다2');
    console.log(parent_scope);
    $http.get('feed/myActivity.do').success(function(result){
      parent_scope.activities = result.activity;
    });
  }]);
});