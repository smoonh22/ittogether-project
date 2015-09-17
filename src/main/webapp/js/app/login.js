function login() {
  event.preventDefault();
  $.getJSON('auth/login.do', {
      email: $('#login-email').val(),
      password: $('#login-pass').val()
    },
    function (result) {

      console.log(result.data);
      if (result.data === 'yes') {
        window.location = "main.html";
      }
    });


};




$('#signup-button').click(function (event) {

  $.ajax('auth/signup.do',
    {
      method: 'POST',
      dataType: 'json',
      data: {
        email: $('#email').val(),
        nickname: $('#nickname').val(),
        password: $('#password').val(),
        name: $('#name').val()
      },
  success: function (result) {
      if (result.result === 'success') {
        console.log('가입 축하드립니다.');
        $('#normalModal').modal('toggle');
      }
    }
  });
});
