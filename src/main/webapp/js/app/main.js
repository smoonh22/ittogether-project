define(function () {
  //페이지가 완전히 로드된 뒤에 실행
  var app = angular.module('main', ['ngRoute', 'friendsFeed', 'myFriendList','myActivities', 'customMyMap']);
  app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'templates/changeToMap.html',
      controller: 'toggleToMapCtrl'
    });
//    $routeProvider.when('/main_map', {
//      templateUrl: 'templates/main_map.html'
//    });
    $routeProvider.when('/activity', {
      templateUrl: 'templates/my_activities.html'
    });
    $routeProvider.when('/myMap', {
      templateUrl: 'templates/myMap.html'
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
          nickname: sessionStorage.getItem('nickname')
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
  //심심해 모달 
  app.directive('boredModal', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/modals/bored-modal.html'
    };
  });

  app.directive('showNav', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/header.html'
        
    };
  });
  
  
  app.controller('toggleToMapCtrl', ['$http', '$scope', function($http, $scope) {
      var parent_scope = $scope;
      $scope.subview = 'main_html';
      $scope.toggleMap = function() {
          parent_scope.subview= 'map_html';
          
      }
  }]);
  
//  app.controller('hahaCtrl', function() {
//    console.log('HAAAACTl');
//    $scope.$apply.test ="hahahah";
//  });
  // 모달창에서 구글맵 나오게 trigger
//  $('#infoModal').on("shown.bs.modal", function () {
//    google.maps.event.trigger(map, "resize");
//  });
  

});
