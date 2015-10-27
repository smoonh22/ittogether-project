// 도움말 시작
       var tour = new Tour({
        storage: false,
        backdrop : true,
        steps: [
        {
          element: ".myActivity",
          placement: "bottom",
          title: "<h4>내 활동</h4>",
          content: "내가 참여하고 있는 참여했었던 게시물을 열람하실 수 있습니다.",
          template:"<div class='popover tour'>" 
        +"<div class='arrow'></div>"
        +"<h3 class='popover-title'></h3>"
        +"<div class='popover-content'></div>"
        +"<div class='popover-navigation'>"
        +"<button class='btn btn-info' data-role='prev'>« 이전</button>"
        +"<span data-role='separator'></span>"
        +"<button class='btn btn-info' data-role='next'>다음 »</button>"
        +"<button class='btn btn-primary tour-close-btn' data-role='end'>도움말 끄기</button>"
        +"</div>"
        +"</div>"
        },
        {
          element: ".simsimhae",
          placement: "bottom",
          title: "<h4>심심해</h4>",
          content: "간편하게 게시글을 입력할 수 있는 기능입니다." +
                " 빠르고 간편하게 글을 입력하실 수 있습니다.",
          template:"<div class='popover tour'>" 
         +"<div class='arrow'></div>"
         +"<h3 class='popover-title'></h3>"
         +"<div class='popover-content'></div>"
         +"<div class='popover-navigation'>"
         +"<button class='btn btn-info' data-role='prev'>« 이전</button>"
         +"<span data-role='separator'></span>"
         +"<button class='btn btn-info' data-role='next'>다음 »</button>"
         +"<button class='btn btn-primary tour-close-btn' data-role='end'>도움말 끄기</button>"
         +"</div>"
         +"</div>"
              },
  
        {
          element: ".dropdown",
          placement: "bottom",
          title: "<h4>내 친구 목록</h4>",
          content: "나와 친구인 회원과 나와 친구가 되려는 회원의 목록을 보여줍니다.",
            template:"<div class='popover tour'>" 
              +"<div class='arrow'></div>"
              +"<h3 class='popover-title'></h3>"
              +"<div class='popover-content'></div>"
              +"<div class='popover-navigation'>"
              +"<button class='btn btn-info' data-role='prev'>« 이전</button>"
              +"<span data-role='separator'></span>"
              +"<button class='btn btn-info' data-role='next'>다음 »</button>"
              +"<button class='btn btn-primary tour-close-btn' data-role='end'>도움말 끄기</button>"
              +"</div>"
              +"</div>"
        },
        {
          element: ".myprofile",
          placement: "bottom",
          title: "<h4>내 정보</h4>",
          content: "내 정보를 보여줍니다.성별, 취미, 나이, 고향 을 추가 입력 하실 수 있습니다.",
          template:"<div class='popover tour'>" 
            +"<div class='arrow'></div>"
            +"<h3 class='popover-title'></h3>"
            +"<div class='popover-content'></div>"
            +"<div class='popover-navigation'>"
            +"<button class='btn btn-info' data-role='prev'>« 이전</button>"
            +"<span data-role='separator'></span>"
            +"<button class='btn btn-info' data-role='next'>다음 »</button>"
            +"<button class='btn btn-primary tour-close-btn' data-role='end'>도움말 끄기</button>"
            +"</div>"
            +"</div>"
        },
        {
          element: ".leftside-div",
          placement: "right",
          title: "<h4>내 친구들의 게시물</h4>",
          content: "나와 친구인 회원들이 올린 최근 게시물을 보여줍니다.",
            template:"<div class='popover tour'>" 
              +"<div class='arrow'></div>"
              +"<h3 class='popover-title'></h3>"
              +"<div class='popover-content'></div>"
              +"<div class='popover-navigation'>"
              +"<button class='btn btn-info' data-role='prev'>« 이전</button>"
              +"<span data-role='separator'></span>"
              +"<button class='btn btn-info' data-role='next'>다음 »</button>"
              +"<button class='btn btn-primary tour-close-btn' data-role='end'>도움말 끄기</button>"
              +"</div>"
              +"</div>"
        },
        {
          element: ".rightside-div",
          placement: "left",
          title: "<h4>주변 회원의 게시물</h4>",
          content: "친구가 아닌 주변회원들이 올린 최근 게시물을 보여줍니다.",
            template:"<div class='popover tour'>" 
              +"<div class='arrow'></div>"
              +"<h3 class='popover-title'></h3>"
              +"<div class='popover-content'></div>"
              +"<div class='popover-navigation'>"
              +"<button class='btn btn-info' data-role='prev'>« 이전</button>"
              +"<span data-role='separator'></span>"
              +"<button class='btn btn-info' data-role='next'>다음 »</button>"
              +"<button class='btn btn-primary tour-close-btn tour-close-btn' data-role='end'>도움말 끄기</button>"
              +"</div>"
              +"</div>"
        },
        {
          element: ".findfrdgo",
          placement: "bottom",
          title: "<h4>친구를 찾아보세요!</h4>",
          content: "버튼을 눌러 내 주변 위치의 친구들을 찾아보시고 친구가 되어 보세요!",
            template:"<div class='popover tour'>" 
              +"<div class='arrow'></div>"
              +"<h3 class='popover-title'></h3>"
              +"<div class='popover-content'></div>"
              +"<div class='popover-navigation'>"
              +"<button class='btn btn-info' data-role='prev'>« 이전</button>"
              +"<span data-role='separator'></span>"
              +"<button class='btn btn-info' data-role='next'>다음 »</button>"
              +"<button class='btn btn-primary tour-close-btn' data-role='end'>도움말 끄기</button>"
              +"</div>"
              +"</div>"
        }
        
      ]});
       
       $(document).on('click', '.tour-close-btn', function() {
         $.ajax('member/updateTour.do', {
           method: 'get',
           dataType: 'json',
           data : {
                 mno: sessionStorage.getItem('mno'),
                 },
           success: function(result) {
                 if (result.data == 'yes') {
                 }
                 
             }
         });
       });
     