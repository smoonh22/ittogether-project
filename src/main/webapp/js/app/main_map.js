(function() {
  var app = angular.module('mainMap', []);
  
  app.controller('friendMarkController', function() {
    this.friends = myFriends;
  })
  
  $.getJSON('marker/friends.do'), {
      
    
  }, function (result) {
    patent_scope.userDatas = result.data;
  }
});
  
  
    



//
//$.getJSON('member/userInfo.do', {
//          nickname: sessionStorage.getItem('nickname')
////          name: sessionStorage.getItem('name'),
////          latitude: sessionStorage.getItem('nickname'),
////          latitude: sessionStorage.getItem('latitude')
//        }, function (result) {
//          parent_scope.userDatas = result.data;
//        });
//
//         $('#save-changes').click(function (event) {
//            var radio = $("input:radio[name='radioButton']:checked").val();
//           
//           $.ajax('member/updateUser.do',
//              {
//               method: 'POST',
//               dataType: 'json',
//               data: {
//                  nickname : $('#nickname').val(),
//                  name: $('#name').val(), 
//                  email: $('#email').val(),
//                  password: $('#password').val(),
//                  address: $('#pac-input').val(),
//                  latitude: $('#latitude').val(),
//                  longitude: $('#longitude').val(),
//                  introduction: $('#introduction').val(),
//                  age: $('#age').val(),
//                  hobby: $('#hobby').val(),
//                  hometown: $('#hometown').val(),
//                  sex: radio
//               },
//              success: function(result){
//                 if (result.data == 'success') {
//                   $('#infoModal').modal('toggle');
//                   console.log('성공적으로 변경되었습니다');
//                 }
//              }
//           });
//        });
//      },
//      controllerAs: 'infoCtrl',
//      templateUrl: 'templates/modals/info-modal.html'
//    };
//  });