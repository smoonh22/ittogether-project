define(function () {

      var app = angular.module('myActivities', []);

      app.controller('activityCtrl', ['$http', function ($http) {
        var parent_scope = this;
        $http.get('feed/myActivity.do').success(function (result) {
          parent_scope.activities = result.activity;
          console.log(result.activity.meetTime);
        });
  }]);
});
