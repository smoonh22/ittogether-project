  define(function () {

      var app = angular.module('myActivities', []);

      app.controller('activityCtrl', ['$http','$scope','$window', function ($http,$scope,$window) {
        var parent_scope = this;
        var w = angular.element($window);
        
        
        //화면 resize --> 화면크기 바꿀시 refresh 하는 기능  html 에서 resize 써진  영역 감시
        w.bind('resize', function(){
          window.location.reload();
        })
       
      $scope.mainAct = function() {$http.get('feed/myActivity.do',{params : {mno: sessionStorage.getItem('mno') }}).success(function (result) {
        $scope.activities = result.activity;
        })
        };
        // 여기서 speed duration 으로 뿌려주는 속도 지정할수 있음  selector로 지정할수 있음 애니메이션은 width 한칸 넓이
         $scope.$on('onRepeatLast', function(scope, element, attrs) {
           $("#activity-container").gridalicious({
               selector: ".item",
               animate: true,
               width: 330,
               animationOptions: {
                   queue: true,
                   speed: 100,
                   duration: 800,
                   effect: 'fadeInOnAppear',
               }
           });
       });
         //$scope.mainAct 펑션 밑에 놔주세요..
         $scope.mainAct(); 
         
         
         // 댓글 가져오기
         $scope.getComment = function(fno){$http.get('feed/comment.do',{
           params : {
             fno : fno
           }
         }).success(function(result){
          $scope.comments = result.coment;
        
           // 삭제 수정 권한 체크
          $scope.checkAuthority = function (Mmno) {
            var mno = sessionStorage.getItem('mno');  
            if(Mmno == mno){
              return true;
            } else {
              return false;
            }
          }
         })
         };  
         // 화면 
       $scope.sizeUp = function (index,sizeDown,fno){
         var item = fno;
         // 댓글 목록불러오기
        $scope.getComment(item);
        
         if(sizeDown == true){
          $scope.myActHide = function(){
            return false; 
          }
         } else {
           $scope.myActHide = function(no){
            if (index == no) {
              return true;
            } else {
              return false;
            }
           }
         }
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
             
             return $scope.getComment(fno);
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
      
      //grid 시스템 뿌려주는거 완료후 동작시작 뿌려주는 모양 바꿔주는 기능  html 에서 on-last-repeat <-- 써진곳을 바꿔줌
      app.directive('onLastRepeat', function($window) {
        return function(scope, element, attrs) {
            if (scope.$last)
                setTimeout(function() {
                    scope.$emit('onRepeatLast', element, attrs);
                }, 1);
        };
    });
 
      
      app.directive('actModal',['Upload', function (Upload) {
        return {
          restrict: 'E',
          controller: function () {
            var parent_scope = this;
            
            
            parent_scope.uploadFiles2 = function(file,no) {
              
              Upload.upload({
                url: contextRoot + '/file/upload.do',
                data: {file: file[0]}
            }).success(function (data, status, headers, config) {
              if(no == 1) {
                $('#piicture').attr('src', data.data[0].url);
              } else if  (no == 2){
                $('#piicture1').attr('src', data.data[0].url);
              } else { 
                $('#piicture2').attr('src', data.data[0].url);
              }
            }).error(function (data, status, headers, config) {
                console.log('error status: ' + status);
            })
            };
             

             $('#create-newAct').click(function (event) {
               $.ajax('feed/insertUser.do',
                  {
                   method: 'POST',
                   dataType: 'json',
                   data: {
                     mno: sessionStorage.getItem('mno'),
                      category : $('.insertCategory').val(),
                      title: $('#title').val(), 
                      content: $('#content').val(),
                      maxHeadCount: $('#maxHeadCount').val(),
                      meetTime : $('#meetTime').val(),
                      attachFile1 : $('#piicture').attr('src'),
                      attachFile2 : $('#piicture1').attr('src'),
                      attachFile3 : $('#piicture2').attr('src')
                   },
                  success: function(result){
                     if (result.data == 'success') {
                       $('#actModal').modal('toggle');
                       window.location.reload();
                     }
                  }
               });
            });
             $("#meetTime").kendoDateTimePicker({
               format: "yyyy/MM/dd hh:mm tt",
               parseFormats: ["MMMM yyyy", "HH:mm"] //format also will be added to parseFormats
           });
             
          },
          controllerAs: 'MCtrl',
          templateUrl: 'templates/modals/insert-modal.html'
        };
      }]); 
      
});
