      // 도움말 시작
             var tour = new Tour({
              storage: false,
              backdrop : true,
              steps: [
              {
                element: "#map",
                placement: "bottom",
                title: "<h4>내 주변 지도</h4>",
                content: "내가 입력한 주소를 통해 나의 위치와 근처 회원들의 위치를 알 수 있습니다.",
                template:"<div class='popover tour'>" 
              +"<div class='arrow'></div>"
              +"<h3 class='popover-title'></h3>"
              +"<div class='popover-content'></div>"
              +"<div class='popover-navigation'>"
              +"<button class='btn btn-info' data-role='prev'>« 이전</button>"
              +"<span data-role='separator'> </span>"
              +"<button class='btn btn-info' data-role='next'>다음 »</button>"
              +"<button class='btn btn-primary' data-role='end'>도움말 끄기</button>"
              +"</div>"
              +"</div>"
              },
              {
                element: "#finder-box",
                placement: "bottom",
                title: "<h4>지도 검색 옵션</h4>",
                content: "지도 검색 옵션을 통해 내 주변 회원들을 매칭해줍니다",
                template:"<div class='popover tour'>" 
               +"<div class='arrow'></div>"
               +"<h3 class='popover-title'></h3>"
               +"<div class='popover-content'></div>"
               +"<div class='popover-navigation'>"
               +"<button class='btn btn-info' data-role='prev'>« 이전</button>"
               +"<span data-role='separator'> </span>"
               +"<button class='btn btn-info' data-role='next'>다음 »</button>"
               +"<button class='btn btn-primary' data-role='end'>도움말 끄기</button>"
               +"</div>"
               +"</div>"
                    },
        
              {
                element: "#friend-box",
                placement: "left",
                title: "<h4>내 주변 친구 추천</h4>",
                content: "나의 취미, 고향, 나이를 통해 나와 가장 마음이 맞는 친구를 찾아줍니다.",
                  template:"<div class='popover tour'>" 
                    +"<div class='arrow'></div>"
                    +"<h3 class='popover-title'></h3>"
                    +"<div class='popover-content'></div>"
                    +"<div class='popover-navigation'>"
                    +"<button class='btn btn-info' data-role='prev'>« 이전</button>"
                    +"<span data-role='separator'> </span>"
                    +"<button class='btn btn-info' data-role='next'>다음 »</button>"
                    +"<button class='btn btn-primary' data-role='end'>도움말 끄기</button>"
                    +"</div>"
                    +"</div>"
              },
              {
                element: "#left-feed",
                title: "<h4>내 친구의 게시물</h4>",
                content: "나의 친구들이 올린 최근 게시물을 보여줍니다.",
                  template:"<div class='popover tour'>" 
                    +"<div class='arrow'></div>"
                    +"<h3 class='popover-title'></h3>"
                    +"<div class='popover-content'></div>"
                    +"<div class='popover-navigation'>"
                    +"<button class='btn btn-info' data-role='prev'>« 이전</button>"
                    +"<span data-role='separator'></span>"
                    +"<button class='btn btn-info' data-role='next'>다음 »</button>"
                    +"<button class='btn btn-primary' data-role='end'>도움말 끄기</button>"
                    +"</div>"
                    +"</div>"
              },
              {
                element: "#right-feed",
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
                    +"<button class='btn btn-primary' data-role='end'>도움말 끄기</button>"
                    +"</div>"
                    +"</div>"
              }
              
            ]});
            tour.init();
        
            
            $('#startTour').click(function(event){
                tour.start();
            });
  
