define(function() {
      //페이지가 완전히 로드된 뒤에 실행
      var app = angular.module('main', ['friendsFeed','noneFriendsFeed','myActivities']);

        $('#toggleMap').click(function(event) {
          $('#changeToMap').load('main_map.html');
      });
        

  
});


