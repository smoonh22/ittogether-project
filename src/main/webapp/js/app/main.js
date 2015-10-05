define(function () {
    
  //페이지가 완전히 로드된 뒤에 실행
  var app = angular.module('main', ['ngRoute', 'ngFileUpload', 'friendsFeed', 'myFriendList','myActivities']);
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
  app.directive('infoModal', ['Upload', function (Upload) {
    
    return {
      restrict: 'E',
      controller: function () {
        var parent_scope = this;
        
        $.getJSON('member/userInfo.do', {
          nickname: sessionStorage.getItem('nickname')
        }, function (result) {
          parent_scope.userDatas = result.data;
        });
        
          parent_scope.uploadFiles = function(file) {
          Upload.upload({
            url: 'file/upload.do',
            data: {file: file}
        }).success(function (data, status, headers, config) {
            $('#profile-img').attr('src', data.data[0].url);
        }).error(function (data, status, headers, config) {
            console.log('error status: ' + status);
        })
        };
        
        
         $('#save-changes').click(function (event) {
            var radio = $("input:radio[name='radioButton']:checked").val();
           
           $.ajax('member/updateUser.do',
              {
               method: 'POST',
               dataType: 'json',
               data: {
                  nickname : $('#nickname').val(),
                  name: $('#name').val(), 
                  email: $('#email').val(),
                  password: $('#password').val(),
                  address: $('#pac-input').val(),
                  latitude: $('.info-latitude').val(),
                  longitude: $('.info-longitude').val(),
                  introduction: $('#introduction').val(),
                  age: $('#age').val(),
                  hobby: $('#hobby').val(),
                  hometown: $('#hometown').val(),
                  sex: radio,
                  profilePicture: $('#profile-img').attr('src')
               },
              success: function(result){
                 if (result.data == 'success') {
                   $('#infoModal').modal('toggle');
                   console.log('성공적으로 변경되었습니다');
                 }
              }
           });
        });
      },
      controllerAs: 'infoCtrl',
      templateUrl: 'templates/modals/info-modal.html'
    };
  }]);
  
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
  
  
  //  메인 화면에서 지도로 토글 시키는 컨트롤러
  app.controller('toggleToMapCtrl', ['$http', '$scope', function($http, $scope) {
      var parent_scope = $scope;
      $scope.subview = 'main_html';
      $scope.toggleMap = function() {
          parent_scope.subview= 'map_html';
          
      }
  }]);
});

