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
        
        'myFriendList': 'js/app/myFriendList',
        'angular-masonry-directive' : 'bower_components/angular-masonry-directive/angular-masonry-directive',
        //컨트롤러
        'main': 'js/app/main',
        'friendsFeed': 'js/app/friendsFeed',
        'tour': 'js/app/tour',
        'myActivities': 'js/app/myActivities',
        'mainMap' : 'js/app/main_map',
        'myFriendList': 'js/app/myFriendList',
    },
  
  shim: {
    'angular': {
        deps: ['jquery'],
        exports: 'angular'
    },
    'angular-route': {
      deps: ['angular']
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
      deps: ['angular-route', 'friendsFeed', 'bootstrap.min', 'tour','myFriendList','myActivities','angular-masonry-directive']
    },
    'friendsFeed': {
      deps: ['angular']
    },
    'myActivities': {
      deps: ['angular','angular-masonry-directive']
    },
    'angular-masonry-directive' : {
      deps:['angular','jquery']
    },
    'mainMap': {
      deps: ['angular']
    },
    'myFriendList': {
      deps:['angular']
    },
  }
  
});

require(['main'], function() {
    angular.bootstrap(document, ['main']);
});









