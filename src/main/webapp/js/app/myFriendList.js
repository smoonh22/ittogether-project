define(function() {
  var app = angular.module('myFriendList', []);
  
 app.controller('myFriendCtrl',['$http','$scope', function friend($http,$scope) {
    var parent_scope = this;
    
    $scope.friendListTest = function (){
    $http({
      method : 'POST',
      url : 'frd/list.do',
      params : {
        mno : window.sessionStorage.getItem('mno')
      }
    }).success(function(data, status, headers, config){
      $scope.frdLists = data.data;
      $scope.applyLists = data.apply;
      $scope.applyList2s = data.applyU;
    }) 

   };
 $scope.search = function(searchQuery) {
   $http.get('frd/search.do',{params : {mno: sessionStorage.getItem('mno') ,searchCnt : searchQuery }}).success(function(result){
     parent_scope.searchLists = result.searchList;
   })
 };
 
  
 $scope.delfrd = function(mno){
   $http.get('frd/delete.do',{params : { frdmno : mno,  mno: sessionStorage.getItem('mno')}}).success(function(result){
     
     return $scope.friendListTest();
     
       })
   };
   $scope.applyfrd = function(mno){
     $http.get('frd/apply.do',{params : { frdmno : mno,  mno: sessionStorage.getItem('mno')}}).success(function(result){
       return $scope.friendListTest();
     })
   };
  
  
  
  $scope.startChatting = function(frdno) {
      startChatting(frdno, sessionStorage.getItem('mno'));
  }
  
  
  
  }]);
// 수락 버튼
});