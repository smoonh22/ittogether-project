define(function() {
  var app = angular.module('myFriendList', []);
  
app.controller('myFriendCtrl',['$http','$scope', function($http,$scope) {
    var parent_scope = this;
    var data = $scope.delfrdmno;
    $http.get(contextRoot + '/frd/list.do',
         {
        params: {
          mno: sessionStorage.getItem('mno')
        }
    }).success(function(result){
      parent_scope.frdLists = result.data;
      parent_scope.applyLists = result.apply;
      parent_scope.applyList2s = result.applyU;
      
    });

 $scope.typeBox = {
    
     availableOptions : [
                         {value : '1', name : '이름'},
                         {value : '2', name : '닉네임'},
                         {value : '3', name : '이메일'}
                         ],
     selectedOption : {value : '3', name : '이메일'}
 };   
   
 $scope.search = function(searchQuery) {
   $http.get(contextRoot + '/frd/search.do',{params : {mno: sessionStorage.getItem('mno') ,searchCnt : searchQuery ,searchType : $('#typeBox').val() }}).success(function(result){
     parent_scope.searchLists = result.searchList;
   })
 };
 
  
 $scope.delfrd = function(mno){
   $http.get(contextRoot + '/frd/delete.do',{params : { frdmno : mno,  mno: sessionStorage.getItem('mno')}}).success(function(result){
       alert("삭제 되었습니다!");

       window.location.reload();
       })
   };
   
  $scope.applyfrd = function(mno){
     $http.get(contextRoot + '/frd/apply.do',{params : { frdmno : mno,  mno: sessionStorage.getItem('mno')}}).success(function(result){
       alert("수락 되었습니다!");
   
      window.location.reload();
     })
   };
  
  
  
  $scope.startChatting = function(frdno) {
      console.log(frdno + 'ffdfd');
      startChatting(frdno, sessionStorage.getItem('mno'));
  }
  
  
  
  }]);
// 수락 버튼
});