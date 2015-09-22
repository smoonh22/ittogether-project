//페이스북으로 로그인하기 버튼을 누르면 발동
$('#facebook-btn').click(function (event) {
  //init합수로 자동적으로 실행 됨.
  window.fbAsyncInit = function () {
   FB.init({
     appId: '1646491478954069',
     cookie: true, // enable cookies to allow the server to access 
     // the session
     xfbml: true, // parse social plugins on this page
     version: 'v2.4' // use version 2.2
   });

     FB.login(function (response) {
     if (response.authResponse) {
       getUserInfo();
       getPhoto();
     } else {
       console.log('User cancelled login or did not fully authorize.');
     }
   }, { //FACEBOOK API로 페이스북 로그인 정보 가져오기 
     scope: 'email,user_photos'
   });


   function getUserInfo() {
     FB.api('/me?fields=name,email,picture', function (response) {
       //response에 있는 name 데이터 저장
       var saveName = response.name;

       //getJSON으로 데이터베이스에 이메일정보가 있는지 확인
       $.getJSON('auth/getNickName.do', { 
           email: response.email
         },
         function (result) {
           if (result.data === 'no') {
             //데이터베이스에 없으면 모달창을 띄어서 회원가입하게 유도
             $('#email').val(response.email);
             $('#name').val(response.name);
             $('#signupModal').modal('toggle');
           } else {
             console.log(result.data);
             //데이터베이스에 이메일 값 있으면  이름 정보 세션에 저장 후 index.html로이동 
             sessionStorage.setItem("member",result.member.nickname);  
             window.location = "index.html";
           }
         });

     });
   }

   function getPhoto() {
     FB.api('/me/picture?type=normal', function (response) {
       //프로필사진 경로 가져오기  
       $('#profile-img').attr('src', response.data.url);

     });


   }


 };
 
 // Load the SDK asynchronously
 (function (d, s, id) {
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) return;
   js = d.createElement(s);
   js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

 });
