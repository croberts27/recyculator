// DEPENDENCIES
var searchBtnEl = document.querySelector("#search-button")
var searchInputEl = document.querySelector("#search-input")

// DATA / STATE
var recyclableItems = [
  {
    item: "Plastic Bottles",
    disposal: "Make sure to empty and rise them before recycling."
  },
  {
    item: "Aluminum Cans",
    disposal: "Make sure to rinse them before recycling."
  },
  {
    item: "Glass Bottles",
    disposal: "Make sure to rinse them before recycling.",
  },
  {
    item: "Newspapers",
    disposal: "Make sure to keep them clean and dry before recycling."
  },
  {
    item: "Cardboard",
    disposal: "Make sure to flatten it before recycling."
  },
  {
    item: "Paper",
    disposal: "Make sure to keep it clean and dry before recycling."
  },
  {
    item: "Steel Cans",
    disposal: "Make sure to rinse them before recycling."
  },
  {
    item: "Batteries",
    disposal: "Make sure to rinse them before recycling."
  },
  {
    item: "Electronics",
    disposal: "Electronics should be recycled through electronic waste (e-waste) recycling programs or facilities. Check for local e-waste recycling options."
  },
  {
    item: "Ink Cartridges",
    disposal: "Ink cartridges can be recycled through various cartridge recycling programs. Check with office supply stores or manufacturers for recycling options."
  }
];
//testing recyclableItems var
console.log(recyclableItems);

// FUNCTIONS


// USER INTERACTIONS
searchBtnEl.addEventListener("click", function() {
  console.log("click")
})

// INITIALIZATIONS


//     let map;

// async function initMap() {
//   const { Map } = await google.maps.importLibrary("maps");
//   map = new Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });


// initMap();
// }

// // AIzaSyAR8nmcULAcf5L45ZkY1-WwYw053-QXGCQ