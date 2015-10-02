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
      'angular-masonry' : 'bower_components/angular-masonry/angular-masonry',
      'ng-file-upload': 'bower_components/ng-file-upload/ng-file-upload',
      'ng-file-upload-shim': 'bower_components/ng-file-upload/ng-file-upload-shim',
      //컨트롤러
      'main': 'js/app/main',
      'myFriendList': 'js/app/myFriendList',
      'friendsFeed': 'js/app/friendsFeed',
      'tour': 'js/app/tour',
      'myActivities': 'js/app/myActivities',
      'mainMap' : 'js/app/main_map',
      'myFriendList': 'js/app/myFriendList',
      'info-modal': 'js/app/info-modal'
    },
  
  shim: {
    'angular': {
      deps: ['jquery'],
      exports: 'angular'
    },
    'ng-file-upload': {
      deps: ['angular']
    },
    'angular-route': {
      deps: ['angular']
    },
    'bootstrap.min': {
      deps: ['jquery']
    },
    'tour': {
      deps:['bootstrap-tour']
    },
    'bootstrap-tour': {
      deps:['jquery']
    },
    'main': {
      deps: ['angular-route', 'ng-file-upload', 'friendsFeed', 'bootstrap.min', 'tour','myFriendList','myActivities','mainMap']
    },
    'friendsFeed': {
      deps: ['angular']
    },
    'myActivities': {
      deps: ['angular','angular-masonry']
    },
    'angular-masonry-directive' : {
      deps:['angular','jquery']
    },
    'mainMap': {
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









