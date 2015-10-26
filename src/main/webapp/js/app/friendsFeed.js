define(function () {
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
      if (result.data == '') {
          $('.empty-friend-feed').text('최근 친구들의 활동이 없습니다.');
      }else {
        $('.empty-friend-feed').css('display','none');
      parent.feeds = result.data;
      }
    });
    
    //비친구 최근 게시물
    $http.get('feed/noneFriendFeed.do', {
    params: {
       mno: sessionStorage.getItem('mno')
    }
    }).success(function(result){
      if (result.data == '') {
        $('.empty-nonefriend-feed').text('주변 회원들의 활동이 없습니다.');
    }else {
      parent.nfeeds = result.data;
      $('.empty-nonefriend-feed').css('display','none');
    }
    });
    
    //디테일 정보
    $scope.detailview =  function (fno){
      $http({
        method: 'POST',
        url : 'feed/detail.do',
        params : {
          fno : fno,
          mno : sessionStorage.getItem('mno')
        }
      }).success(function(data, status, headers, config){
        $scope.fullalert = function(){
          return true;
        }
        $scope.details = data.detail;
        $(function(){
          $(".test007").click(function(){
            $('#detailModal').modal();
          })
        });
        
        
        
        if (data.check != null){
          $('#join-btn').css('display','none');
          $('#out-btn').css('display','');
          $('.modal-footer').css('display','');
      } else {
        $('#join-btn').css('display','');
        $('#out-btn').css('display','none');
        $('.modal-footer').css('display','none');
        $('.checkAuthority').css('display','none');
      }
      })

      // 댓글 목록불러오기
      $http.get('feed/comment.do',{
        params : {
          fno : fno
        }
      }).success(function(result){
       parent.comments = result.coment;
     
        // 삭제 수정 권한 체크
       $scope.checkAuthority = function (Mmno) {
         var mno = sessionStorage.getItem('mno');  
         if(Mmno == mno){
           return true;
         } else {
           return false;
         }
       }

      });
    }
    // 참가 하기 버튼
    $scope.joinbtn = function(fno,current,max) {
      if(current==max || current > max){
        $scope.fullalert = function(){
          return false;
      }
      }else {
      $.ajax('feed/friendjoin.do', {
        method: 'get',
        dataType: 'json',
        data : {
              mno: sessionStorage.getItem('mno'),
              fno: fno
              },
        success: function(result) {
              
              return $scope.detailview(fno);
          }
      });
     }
    };
    // 나가기 버튼
    $scope.outbtn = function (fno) {
      $.ajax('feed/friendout.do', {
        method: 'get',
        dataType: 'json',
        data : {
              mno: sessionStorage.getItem('mno'),
              fno: fno
              },
        success: function(result) {
              return $scope.detailview(fno);
          }
      });
  
}
    // 댓글 등록 버튼
    $scope.commentinsert = function insert(fno,content) {
      $.ajax('feed/comentinsert.do',{
         method : 'get',
         dataType : 'json',
         data : {
                 fno : fno ,
                 mno : sessionStorage.getItem('mno'),
                 content : content
                },
         success : function(result) {
           
           return $scope.detailview(fno);
         }
      });
      
    }
    // 댓글 삭제 버튼
    $scope.deleteCmt = function (cno,fno) {
      $.ajax('feed/comentdelete.do',{
        method : 'get',
        dataType : 'json',
        data : {
                cno : cno
               },
        success : function(result) {
          
          return $scope.detailview(fno);
        }
     });

    }
  
    // 수정 버튼 누를떄 event
    $scope.openUpdateArea = function (index) {
      
      $scope.commentArea = function (cno) {
        if(index == cno) {
          return true;
        }
      }
      
      $scope.updateArea = function (cno) {
        if (index == cno){
          return true;
        }
        
      }
    }
    // 수정 버튼 후 등록버튼
    $scope.updateCmt = function (index,cno,fno,rewriteComment) {
      
      $scope.commentArea = function (cno) {
        if(index == cno) {
          return false;
        }
      }
      
      $scope.updateArea = function (cno) {
        if (index == cno){
          return false;
        }
      }
        
      $.ajax('feed/comentupdate.do',{
        method : 'get',
        dataType : 'json',
        data : {
                cno : cno ,
                content : rewriteComment
               },
          success : function(result) {
          return $scope.detailview(fno);
        }
     });
   }
    // 수정버튼 후 취소 버튼
    $scope.cancelBtn = function (index,cno) {
      $scope.commentArea = function (cno) {
        if(index == cno) {
          return false;
        }
      }
      
      $scope.updateArea = function (cno) {
        if (index == cno){
          return false;
        }
      }
    }
    

   

    
  }]);
  app.directive('onTourStart', function($window) {
    return function(scope, element, attrs) {
        if (scope.$last) {
          if(sessionStorage.getItem("tour-start")==0){
            sessionStorage.setItem("tour-start",1);
          tour.start();
            }
          }
      };
  });
  
  app.directive('fdetailModal', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/modals/fdetail-modal.html'
    };
  }); 
});