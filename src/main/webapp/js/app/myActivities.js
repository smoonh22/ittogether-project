  define(function () {

      var app = angular.module('myActivities', []);

      app.controller('activityCtrl', ['$http','$scope', function ($http,$scope) {
        var parent_scope = this;
        $http.get('feed/myActivity.do',{params : {mno: sessionStorage.getItem('mno') }}).success(function (result) {
          parent_scope.activities = result.activity;
          $scope.activities = result.activity;
        });
        
  }]);
      app.directive('detailModal', function () {
        return {
          restrict: 'E',
          templateUrl: 'templates/modals/actdetail-modal.html'
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
             

             $('#btn').click(function (event) {
               $.ajax('feed/insertUser.do',
                  {
                   method: 'POST',
                   dataType: 'json',
                   data: {
                     mno: sessionStorage.getItem('mno'),
                      category : $('#category').val(),
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
                       alert('등록되었습니다');
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