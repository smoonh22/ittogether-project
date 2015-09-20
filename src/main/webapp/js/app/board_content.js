(function () {
  var app = angular.module('content', ["wu.masonry"]);

  app.controller('FeedCtrl', ['$http', function($http) {
    var a = this;
    $http.get('feed/list.do').success(function(result){
       a.feeds = result.data;
    });
    
  }]);
  
})();


