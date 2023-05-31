// DEPENDENCIES


// DATA / STATE


// FUNCTIONS


// USER INTERACTIONS


// INITIALIZATIONS


    let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });


initMap();
}

// AIzaSyAR8nmcULAcf5L45ZkY1-WwYw053-QXGCQ