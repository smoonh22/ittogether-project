define(function() {
  var app = angular.module('myFriendList', []);
  
app.controller('myFriendCtrl',['$http','$scope', function($http,$scope) {
    var parent_scope = this;
    var data = $scope.delfrdmno;
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

   
 $scope.search = function(searchQuery) {
   $http.get('frd/search.do',{params : {mno: sessionStorage.getItem('mno') ,searchCnt : searchQuery }}).success(function(result){
     parent_scope.searchLists = result.searchList;
   })
 };
 
 $scope.insertfrd = function(mno) {
   $http.get('frd/insert.do',{params : {frdmno : mno, mno: sessionStorage.getItem('mno')}}).success(function(result){
     alert("신청이 완료되었습니다");
     
     window.location.reload();
   })
 };
  
 $scope.delfrd = function(mno){
   $http.get('frd/delete.do',{params : { frdmno : mno,  mno: sessionStorage.getItem('mno')}}).success(function(result){
       alert("삭제 되었습니다!");

       window.location.reload();
       })
   };
   $scope.applyfrd = function(mno){
     $http.get('frd/apply.do',{params : { frdmno : mno,  mno: sessionStorage.getItem('mno')}}).success(function(result){
       alert("수락 되었습니다!");
   
      window.location.reload();
     })
   };
  }]);
// 수락 버튼
});