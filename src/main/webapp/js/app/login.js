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
      longitude: $('#longitude').val()
    },
    success: function (result) {
      if (result.result === 'success') {
        console.log('가입 축하드립니다.');
        $('#normalModal').modal('toggle');
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
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {

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
$('#normalModal').on("shown.bs.modal", function () {
  google.maps.event.trigger(map, "resize");
});

// 지도 관련 끝
