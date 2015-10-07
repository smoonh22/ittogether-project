define(function() {
  var app = angular.module('myFriendList', []);
  
app.controller('myFriendCtrl',['$http','$scope', function friend($http,$scope) {
    var parent_scope = this;
    var data = $scope.delfrdmno;
    $.ajax("frd/list.do",
         {
        method: 'POST',
        dataType : 'json',
        data: {
          mno: window.sessionStorage.getItem('mno')
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
 
  
 $scope.delfrd = function(mno){
   $http.get('frd/delete.do',{params : { frdmno : mno,  mno: sessionStorage.getItem('mno')}}).success(function(result){
       alert("삭제 되었습니다!");
       return friend($http,$scope);
       })
   };
   $scope.applyfrd = function(mno){
     $http.get('frd/apply.do',{params : { frdmno : mno,  mno: sessionStorage.getItem('mno')}}).success(function(result){
       alert("수락 되었습니다!");
       return friend($http,$scope);
     })
   };
  }]);
// 수락 버튼
});