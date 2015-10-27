define(function () {
    
  //페이지가 완전히 로드된 뒤에 실행
  var app = angular.module('main', ['ngRoute', 'ngFileUpload', 'friendsFeed', 'myFriendList','myActivities']);
  app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'templates/main_body.html',
      controller: 'toggleToMapCtrl'
    });
//    $routeProvider.when('/main_map', {
//      templateUrl: 'templates/main_map.html'
//    });
    $routeProvider.when('/activity', {
      templateUrl: 'templates/my_activities.html'
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
        
        $.getJSON(contextRoot + '/member/userInfo.do', {
          nickname: sessionStorage.getItem('nickname')
        }, function (result) {
          parent_scope.userDatas = result.data;
        });
        
          parent_scope.uploadFiles = function(file) {
          Upload.upload({
            url: contextRoot + '/file/upload.do',
            data: {file: file}
        }).success(function (data, status, headers, config) {
            $('#profile-img').attr('src', data.data[0].url);
            
        }).error(function (data, status, headers, config) {
            console.log('error status: ' + status);
        })
        };
        
        
         $('#save-changes').click(function (event) {
            var radio = $("input:radio[name='radioButton']:checked").val();
           
           $.ajax(contextRoot + '/member/updateUser.do',
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
                   sessionStorage.setItem('nickname', $('#nickname').val());
                   $('#userid').text(" " + sessionStorage.getItem('nickname') + " 님 ");
                   $('#header-user-img').attr('src', $('#profile-img').attr('src'));
                   $('#infoModal').modal('toggle');
                   
                   myLoc = [];
                  friendLocArr = []; 
                   notFriendLocArr = [];
                   
                   startSearchingMap();
//                   getMyInfo();
//                   function getMyInfo() {
//                    $.getJSON(contextRoot + '/member/getMyLoc.do', {
//                      mno: sessionStorage.getItem('mno')
//                    }, function(results) {
//                      myLoc[0] = parseFloat((results.data[0].latitude));
//                      myLoc[1] = parseFloat((results.data[0].longitude));
//                      myLoc[2] = Number(results.data[0].mno);
//                      myNickname = results.data[0].nickname;
//                      myIntro = results.data[0].introduction;
//                      myPhoto = results.data[0].profilePicture;
//                      mySex = results.data[0].sex;
//                      myAge = results.data[0].age;
//                      myHobby = results.data[0].hobby;
//                      myHometown = results.data[0].hometown;
//                      console.log('initMap() 실행');  
//                      initMap();
//                    });
//                   }
                     
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
      $scope.subview = 'before_html';
      $scope.toggleMap = function() {
          tour.end();
          parent_scope.subview= 'map_html';
          
      }
  }]);
});
