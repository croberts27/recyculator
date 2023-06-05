//DEPENDENCIES


//DATA


//FUNCTIONS
// Class member Christopher Lee showed how he made this function work within his project. We also adapted code from the Google Maps documentation (see link in the README)
let map;

  function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.809013027658104,  lng:  -73.96227161360441 },
    zoom: 8,
  });
};
x = navigator.geolocation;

function getLocation(){
  if (x){
    x.getCurrentPosition(initialize, failure);
  }
  else {
    console.log("Geolocation is not supported.")
  }
}

// x.getCurrentPosition(initialize, failure);

  function initialize(position) {
    let myLat = position.coords.latitude;
    let myLng = position.coords.longitude;

    var coords = new google.maps.LatLng(myLat,myLng);

    var mapOptions = {
      zoom: 10,
      center: coords,
      mapTypeId: google.maps.MapTypeId.ROADMAP 
    }

    map = new google.maps.Map(document.getElementById("map"), mapOptions)
    var marker = new google.maps.Marker({
        map:map,
        position: coords,
      });
    searchNearbyRecyclingCenters(coords,map);
    };

function failure(){
    console.log("Geolocation error:", error);
};

function searchNearbyRecyclingCenters(coords, map){
  var request = {
    location: coords,
    radius: '50000',
    type: ['local_government_office']
  };
  var service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
};

function callback(results, status){
  if (status === google.maps.places.PlacesServiceStatus.OK){
    for (var i=0; i < results.length; i++){
      createMarker(results[i]);
      console.log(results[i]);
    }
  }
};

function createMarker(place){
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });
  google.maps.event.addListener(marker, 'click', function(){
    var infoWindow = new google.maps.InfoWindow();
    infoWindow.setContent(place.name);
    infoWindow.open(map, this);
  });
};


getLocation()

var geoApifyApiKey = "e2e76a6a2e2341f681a4abfd52c7ec27";

fetch('https://api.geoapify.com/v1/ipinfo?apiKey=' + geoApifyApiKey)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    