  define(function () {

      var app = angular.module('myActivities', []);

      app.controller('activityCtrl', ['$http','$scope', function ($http,$scope) {
        var parent_scope = this;
        $http.get('feed/myActivity.do',{params : {mno: sessionStorage.getItem('mno') }}).success(function (result) {
          $scope.activities = result.activity;
        });
        
        
        
        
        
        
        
        
        
        
        
        
  }]);
      app.directive('detailModal', function () {
        return {
          restrict: 'E',
          templateUrl: 'templates/modals/insert-modal.html'
        };
      }); 
      
      app.directive('actModal', function () {
        return {
          restrict: 'E',
          controller: function () {
            var parent_scope = this;

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
                      meetTime : $('#meetTime').val()

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
          templateUrl: 'templates/modals/actdetail-modal.html'
        };
      }); 
      
});