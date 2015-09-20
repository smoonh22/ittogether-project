/*
 * requirejs 라이브러리의 환경 설정
 */

/*
 * baseUrl: 라이브러리를 찾는 기본 디렉토리
 * paths: 기본 디렉토리 외에 다른 디렉토리의 별명 설정 
 */
requirejs.config({
    paths: {
        'jquery': 'bower_components/jquery/dist/jquery',
        'angular': 'bower_components/angular/angular',
        'main': 'js/app/main',
        'friendsFeed': 'js/app/friendsFeed',
        'noneFriendsFeed': 'js/app/noneFriendsFeed',
        'tour': 'js/app/tour',
        'bootstrap.min': 'bower_components/bootstrap/dist/js/bootstrap',
        'bootstrap-tour': 'bower_components/bootstrap-tour/build/js/bootstrap-tour',
    },
  
  shim: {
    'tour': {
      deps:['bootstrap-tour']
    },
    'angular': {
        deps: ['jquery']
    },
    'bootstrap.min': {
      deps: ['jquery']
    },
    'bootstrap-tour': {
      deps:['jquery']
    },
    'main': {
      deps: ['angular', 'friendsFeed','noneFriendsFeed', 'bootstrap.min', 'tour']
    },
    'friendsFeed': {
      deps: ['angular']
    },
    'noneFriendsFeed': {
      deps: ['angular']
    }
  }
  
});

require(['main'], function() {
    angular.bootstrap(document, ['main']);
});









