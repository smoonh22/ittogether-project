function login() {
  event.preventDefault();
  $.getJSON('auth/login.do', {
      email: $('#login-email').val(),
      password: $('#login-pass').val()
    },
    function (result) {
      if (result.data === 'yes') {
        sessionStorage.setItem('nickname', result.nickname);
        sessionStorage.setItem('mno', result.mno);
        sessionStorage.setItem('profile-pic', result.profilePic);
        window.location = "index.html";
      } else {
        alert('이메일 또는 비밀번호가 맞지 않습니다.');
      }
    });
};


$('#signup-button').click(function (event) {

  if ($('#email').val() == '' || $('#name').val() == '' || $('#password').val() == '' || $('#pac-input').val() == '') {
    alert('값을 모두 입력해 주세요');
  } else {
    $.ajax('auth/signup.do', {
      method: 'POST',
      dataType: 'json',
      data: {
        email: $('#email').val(),
        nickname: $('#nickname').val(),
        password: $('#password').val(),
        name: $('#name').val(),
        address: $('#pac-input').val(),
        latitude: $('#latitude').val(),
        longitude: $('#longitude').val(),
        profilePicture: $('#profile-img').attr('src')
      },
      success: function (result) {
        if (result.result === 'success') {
          alert('가입 축하드립니다.');
          $('#signupModal').modal('toggle');
          window.location.reload(true);
        } else {
          alert('값을 정확히 입력해주세요');
        }
      }
    });
  }
});

$('#email').on('keyup', function (event) {
  $.ajax('auth/existEmail.do', {
    method: 'POST',
    dataType: 'json',
    data: {
      email: $('#email').val()
    },
    success: function (result) {
      if (result.data === 'invalid') {
        $('#check-email').css("color", "red");
        $('#check-email').text(' 이메일을 정확히 입력해주세요(@포함)');
        $('#signup-button').attr('disabled', true);
      } else if (result.data === 'yes') {
        $('#check-email').css("color", "red");
        $('#check-email').text(' 이미 사용 중인 이메일입니다.');
        $('#signup-button').attr('disabled', true);
      } else {
        $('#check-email').css("color", "blue");
        $('#check-email').text(' 사용 가능한 이메일입니다.');
        $('#signup-button').attr('disabled', false);
      }
    }
  });
});

$('#nickname').on('keyup', function (event) {
  $.ajax('auth/existNickName.do', {
    method: 'POST',
    dataType: 'json',
    data: {
      nickname: $('#nickname').val()
    },
    success: function (result) {
      if (result.data === 'yes') {
        $('#check-nickname').css("color", "red");
        $('#check-nickname').text(' 이미 사용 중인 닉네임입니다.');
        $('#signup-button').attr('disabled', true);
      } else {
        $('#check-nickname').css("color", "blue");
        $('#check-nickname').text(' 사용 가능한 닉네임입니다.');
        $('#signup-button').attr('disabled', false);
      }
    }
  });
});




// 지도 관련 시작 
function initAutocomplete() { /* 초기화 함수*/
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 37.497943,
      lng: 127.027622
    },
    /* 처음 지도에서 비춰지는 지역 */
    zoom: 15,
    disableDefaultUI: true
  });

  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  map.addListener('bounds_changed', function () {

    searchBox.setBounds(map.getBounds());

  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function () {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function (marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function (place) {

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });

    map.fitBounds(bounds);
    map.setZoom(18);
    $("#latitude").val(markers[0].position.H); /* 위도 경도 */
    $("#longitude").val(markers[0].position.L);

    google.maps.event.addListener(map, 'click', function (event) {
      addMarker(event.latLng, map); /* 마커 찍어주는 함수 */
    });

    function addMarker(location, map) {
      markers[0].setPosition(location);
      $("#latitude").val(markers[0].position.H); /* 위도 경도 */
      $("#longitude").val(markers[0].position.L);
    }
  });

}


// 모달창에서 구글맵 나오게 trigger
$('#signupModal').on("shown.bs.modal", function () {
  google.maps.event.trigger(map, "resize");
});


// 지도 관련 끝
