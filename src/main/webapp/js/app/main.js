(function () {
  var app = angular.module('main', []);

  app.controller('friendFeedCtrl', function() {
    this.feeds = friends;
  });
  
  app.controller('noneFriendFeedCtrl', function() {
    this.feeds = nonfriends;
  });
  
  app.controller('toggleMainBgCtrl', function() {
    this.map = pressBtn;
  });
  var friends = [
    {
      name: '송문혁',
      profile: 'images/man2.jpg',
      date:'오늘저녁8시',
      headcount: '0/3',
      pasttime: '11 hours ago',
      content: '오늘 간단하게 집앞 맥주집에서 술한잔 어때요? 많이 참여해주세요 우리 다같이 모여서 재밌게 놀아요!!!!!!!!! 하하하ㅏ하하하하하'
    },
    {
      name: 'Nick',
      profile: 'images/man1.jpeg',
      date:'오늘저녁6시',
      headcount: '1/4',
      pasttime: '1 hours ago',
      content: 'Hey guys, I am a newbie in this town. I wanna make some friends to hang out with. Please add me so that we can talk!'
      
    },
    {
      name: '신세경',
      profile: 'images/woman3.jpg',
      date:'오늘저녁6시',
      headcount: '1/4',
      pasttime: '2 hours ago',
      content: '오늘 배드민턴 치실분 있나요? 같이 쳐요! 삼거리에서 만나요!'
      
    }
  ];

  var nonfriends = [
    {
      name: '한효주',
      profile: 'images/woman1.jpg',
      date:'오늘저녁6시',
      headcount: '1/2',
      pasttime: '1 hours ago',
      content: '냄비 필요하신분 있으신가요?? 깨끗하고 거의 안썼어요'
    },
    {
      name: '한지민',
      profile: 'images/woman2.jpg',
      date:'오늘저녁6시30분',
      headcount: '0/2',
      pasttime: '30 minutes ago',
      content: '고향에서 어머니가 반찬을 보내주시는데, 이번주 내내 출장가있어서 받지를 못하네요.. 받아주실분! 부탁드려요!!'
      
    },
    {
      name: '한예슬',
      profile: 'images/woman4.jpg',
      date:'오늘저녁8시30분',
      headcount: '1/3',
      pasttime: '30 minutes ago',
      content: '심야영화 볼사람 있나요? 베테랑 같이봐요! 끝나고 맥주 간단하게 한잔 콜?'
      
    }
  ];
  
  var pressBtn = {
    press: true 
  };

})();


