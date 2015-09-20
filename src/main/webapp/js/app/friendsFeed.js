define(function() {
      //페이지가 완전히 로드된 뒤에 실행
      var app = angular.module('friendsFeed', []);

  app.controller('friendFeedCtrl', ['$http', function($http) {
    var a = this;
    $http.get('feed/join.do').success(function(result){
       a.feeds = result.data;
    });
    
  }]);
 
});


