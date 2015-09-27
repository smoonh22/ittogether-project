define(function() {
      //페이지가 완전히 로드된 뒤에 실행
      var app = angular.module('friendsFeed', []);

  
  //친구 최근 게시물
  app.controller('friendFeedCtrl', ['$http', function($http) {
    var parent = this;
    $http.get('feed/friendFeed.do',{
      params: {
        mno: sessionStorage.getItem('mno')
      }
  }).success(function(result){
       parent.feeds = result.data;
    });
    
  }]);
  
  
  //비친구 최근 게시물
  app.controller('noneFriendFeedCtrl',['$http', function($http) {
    var parent = this;
    $http.get('feed/noneFriendFeed.do',{
      params: {
        mno: sessionStorage.getItem('mno')
      }
      }).success(function(result){
        console.log("db연결성공");
        console.log(result.data);
          parent.nfeeds = result.data
        })
      
  }]);

 
});


