define(function () {
  //페이지가 완전히 로드된 뒤에 실행
  var app = angular.module('main', ['ngRoute', 'friendsFeed', 'noneFriendsFeed', 'myActivities']);

  

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
      controller: function () {
        var parent_scope = this;
        $.getJSON('member/userInfo.do', {
          nickname: sessionStorage.getItem('member')
        }, function (result) {
          parent_scope.userDatas = result.data;
        });
        
         $('#save-changes').click(function (event) {
           $.ajax('member/updateUser.do',
              {
               method: 'POST',
               dataType: 'json',
               data: {
                  nickname : $('#nickname').val(),
                  name: $('#name').val(), 
                  email: $('#email').val(),
                  password: $('#password').val(),
                  address: $('#address').val(),
               },
              success: function(result){
                 if (result.data == 'success') {
                   alert('성공적으로 변경되었습니다');
                   $('#infoModal').modal('toggle');
                 }
              }
           });
        });
      },
      controllerAs: 'infoCtrl',
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

  app.directive('showNav', function () {
    $('#userid').text(sessionStorage.getItem('member'));
    return {
      restrict: 'E',
      templateUrl: 'templates/header.html'
    };
  });
  // 모달창에서 구글맵 나오게 trigger
  $('#infoModal').on("shown.bs.modal", function () {
    google.maps.event.trigger(map, "resize");
  });
});
