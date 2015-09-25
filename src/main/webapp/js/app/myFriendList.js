define(function() {
  var app = angular.module('myFriendList', []);
  
app.controller('myFriendCtrl',['$http','$scope', function($http,$scope) {
    var parent_scope = this;
    $http.get('frd/list.do',
         {
        params: {
          mno: sessionStorage.getItem('mno')
        }
    }).success(function(result){
      parent_scope.frdLists = result.data;
      parent_scope.applyLists = result.apply;
      
    });
    // 삭제버튼
    $scope.delfrd = function () {
      $http.get('frd/delete.do', { frdmno : parent_scope.delfrdmno },
          function(response) {
          },
          function(failure) {
            console.log("failed :(", failure);
            });
    }
    // 수락 버튼
  /*  $scope.applyfrd = function () {
      $http.get('frd/delete.do', { frdmno : parent_scope.delfrdmno },
          function(response) {
        console.log("dbdbdbd");
      },
      function(failure) {
        console.log("failed :(", failure);
      });
    }*/
    
  
  }]);
});