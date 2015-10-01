/*
 * requirejs 라이브러리의 환경 설정
 */

/*
 * baseUrl: 라이브러리를 찾는 기본 디렉토리
 * paths: 기본 디렉토리 외에 다른 디렉토리의 별명 설정 
 */
requirejs.config({
    paths: {
      //라이브러리
      'jquery': 'bower_components/jquery/dist/jquery',
      'angular': 'bower_components/angular/angular',
      'bootstrap.min': 'bower_components/bootstrap/dist/js/bootstrap',
      'bootstrap-tour': 'bower_components/bootstrap-tour/build/js/bootstrap-tour',
      'angular-route': 'bower_components/angular-route/angular-route',
      'jquery_ui_widget' : 'bower_components/blueimp-file-upload/js/vendor/jquery.ui.widget',
      'jquery-iframe-transport': 'bower_components/blueimp-file-upload/js/jquery.iframe-transport',
      'jquery-fileupload': 'bower_components/blueimp-file-upload/js/jquery.fileupload',
      //컨트롤러
      'main': 'js/app/main',
      'myFriendList': 'js/app/myFriendList',
      'friendsFeed': 'js/app/friendsFeed',
      'tour': 'js/app/tour',
      'myActivities': 'js/app/myActivities',
      'customMyMap' : 'js/app/myMap',
      'mainMap' : 'js/app/main_map',
      'myFriendList': 'js/app/myFriendList',
      'info-modal': 'js/app/info-modal'
    },
  
  shim: {
    'angular': {
      deps: ['jquery'],
      exports: 'angular'
    },
    'angular-route': {
      deps: ['angular']
    },
    'jquery_ui_widget' : {
      deps:['jquery-iframe-transport']
    },
    'jquery-iframe-transport': {
      deps: ['jquery-fileupload']
    },
    'tour': {
      deps:['bootstrap-tour']
    },
    'bootstrap.min': {
      deps: ['jquery']
    },
    'bootstrap-tour': {
      deps:['jquery']
    },
    'main': {
      deps: ['angular-route', 'friendsFeed', 'bootstrap.min', 'tour','myFriendList','myActivities','mainMap', 'customMyMap', 'jquery_ui_widget']
    },
    'friendsFeed': {
      deps: ['angular']
    },
    'myActivities': {
      deps: ['angular']
    },
    'mainMap': {
      deps: ['angular']
    },
    'customMyMap': {
      deps: ['angular']
    },
    'myFriendList': {
      deps: ['angular']
    }
  }
  
});

require(['main'], function() {
    angular.bootstrap(document, ['main']);
});









