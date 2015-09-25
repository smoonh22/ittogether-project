define(function() {
  var app = angular.module('myFriendList', []);
  
app.controller('myFriendCtrl',['$http','$scope', function($http,$scope) {
    var parent_scope = this;
    var data = $scope.delfrdmno;
    console.log(data);
    $http.get('frd/list.do',
         {
        params: {
          mno: sessionStorage.getItem('mno')
        }
    }).success(function(result){
      parent_scope.frdLists = result.data;
      parent_scope.applyLists = result.apply;
      parent_scope.applyList2s = result.applyU;
      
    });
  /*  $scope.applyfrd = function () {
      $http.get('frd/delete.do', { frdmno : parent_scope.delfrdmno },
          function(response) {
        console.log("dbdbdbd");
      },
      
      function(failure) {
        console.log("failed :(", failure);
      });
    }*/
    
  
 $scope.delfrd = function(mno){
   $http.get('frd/delete.do',{params : { frdmno : mno,  mno: sessionStorage.getItem('mno')}}).success(function(result){
       alert("삭제 되었습니다!");
     })
   };
   $scope.applyfrd = function(mno){
     $http.get('frd/apply.do',{params : { frdmno : mno,  mno: sessionStorage.getItem('mno')}}).success(function(result){
       alert("수락 되었습니다!");
     })
   };
  }]);
// 수락 버튼
});