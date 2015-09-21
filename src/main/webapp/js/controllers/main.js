define(function () {
  //페이지가 완전히 로드된 뒤에 실행
  var app = angular.module('main', ['ngRoute', 'friendsFeed', 'noneFriendsFeed','myActivities']);

  app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', { 
      templateUrl: 'templates/main.html'
    });
    $routeProvider.when('/activity', {
      templateUrl: 'templates/my_activities.html'
    });
    $routeProvider.otherwise({
      redirectTo: '/home'
    });
         }]);
  //개인정보 모달 directives
  app.directive('infoModal', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/modals/info-modal.html'
    };
  });
  //심심해 모달 directives
  app.directive('boredModal', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/modals/bored-modal.html'
    };
  });
  
  app.directive('showNav', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/header.html'
    };
  });
  

});


