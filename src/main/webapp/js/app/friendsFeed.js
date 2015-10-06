define(function () {
  //페이지가 완전히 로드된 뒤에 실행
  var app = angular.module('friendsFeed', []);


 
  app.controller('friendFeedCtrl', ['$http','$scope', function ($http,$scope) {
    var parent = this;
    var parent_scope = $scope;
    //친구 최근 게시물
    $http.get('feed/friendFeed.do', {
      params: {
        mno: sessionStorage.getItem('mno')
      }
    }).success(function (result) {
      parent.feeds = result.data;
    });
    
    //비친구 최근 게시물
    $http.get('feed/noneFriendFeed.do', {
    params: {
       mno: sessionStorage.getItem('mno')
    }
    }).success(function(result){
        parent.nfeeds = result.data;
    });
    
    
    //디테일 정보
    $scope.detailview = function(fno){
      var parent = this;
      
      $http.get('feed/detail.do', {
        params : {
          fno : fno,
          mno : sessionStorage.getItem('mno')
        }
      }).success(function(result){
          console.log(result.detail);
        $scope.details = result.detail;
        
        if (result.check != null){
          $('#join-btn').css('display','none');
          $('#out-btn').css('display','');
          $('.modal-footer').css('display','');
        } else {
          $('#join-btn').css('display','');
          $('#out-btn').css('display','none');
          $('.modal-footer').css('display','none');
        }
      
    });
      // 댓글 목록불러오기
      $http.get('feed/comment.do',{
        params : {
          fno : fno
        }
      }).success(function(result){
       $scope.comments = result.coment;
      });
    }
    
    // 참가 하기 버튼
    $scope.joinbtn = function(fno) {
      $.ajax('feed/friendjoin.do', {
        method: 'get',
        dataType: 'json',
        data : {
              mno: sessionStorage.getItem('mno'),
              fno: fno
              },
        success: function(result) {
            if ( result.data === 'success' ) {
              
              } 
          }
      });
    };
    // 나가기 버튼
    $scope.outbtn = function(fno) {
      $.ajax('feed/friendout.do', {
        method: 'get',
        dataType: 'json',
        data : {
              mno: sessionStorage.getItem('mno'),
              fno: fno
              },
        success: function(result) {
            if ( result.data === 'success' ) {
              } 
          }
      });
  
}
    // 댓글 등록 버튼
    $scope.commentinsert = function(fno,content) {
      
      $.ajax('feed/commentinsert.do',{
         method : 'get',
         dataType : 'json',
         data : {
                 fno : fno ,
                 content : content
                },
         success : function(result) {
           
         }
      });
      
    }
   

    
  }]);


});