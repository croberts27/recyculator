//DEPENDENCIES


//DATA
var geoApifyApiKey = "e2e76a6a2e2341f681a4abfd52c7ec27"

//FUNCTIONS

x = navigator.geolocation;

x.getCurrentPosition(success, failure);

  function success(position) {
    const myLat = position.coords.latitude;
    const myLng = position.coords.longitude;

    var coords = new google.maps.LatLng(myLat,myLng);

    var mapOptions = {
      zoom: 10,
      center: coords,
      mapTypeId: google.maps.MapTypeId.ROADMAP 
    }

    var map = new google.maps.Map(document.getElementById("map"), mapOptions)
    var marker = new google.maps.Marker({
        map:map,
        position: coords
    });
  }
function failure(){}

  
fetch('https://api.geoapify.com/v1/ipinfo?apiKey=' + geoApifyApiKey)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));