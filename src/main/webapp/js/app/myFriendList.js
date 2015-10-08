define(function() {
  var app = angular.module('myFriendList', []);
  
 app.controller('myFriendCtrl',['$http','$scope', function friend($http,$scope) {
    var parent_scope = this;
   friendList();
   function friendList() {
    $.ajax("frd/list.do",
         {
        method: 'POST',
        dataType : 'json',
        data: {
          mno: window.sessionStorage.getItem('mno')
        }
    }).success(function(result){
      $scope.frdLists = result.data;
      $scope.applyLists = result.apply;
      $scope.applyList2s = result.applyU;
      
    })
  };
 $scope.search = function(searchQuery) {
   $http.get('frd/search.do',{params : {mno: sessionStorage.getItem('mno') ,searchCnt : searchQuery }}).success(function(result){
     parent_scope.searchLists = result.searchList;
   })
 };
 
  
 $scope.delfrd = function(mno){
   $http.get('frd/delete.do',{params : { frdmno : mno,  mno: sessionStorage.getItem('mno')}}).success(function(result){
     
     $scope.resetBtn = function(resetmno){
       if (mno == resetmno){
         return false;
       } else {
         true;
       }
     }
     return friendList();
       })
   };
   $scope.applyfrd = function(mno){
     $http.get('frd/apply.do',{params : { frdmno : mno,  mno: sessionStorage.getItem('mno')}}).success(function(result){

       return friendList();
     })
   };
  
  
  
  $scope.startChatting = function(frdno) {
      startChatting(frdno, sessionStorage.getItem('mno'));
  }
  
  
  
  }]);
// 수락 버튼
});