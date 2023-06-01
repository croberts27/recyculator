// DEPENDENCIES
var searchBtnEl = document.querySelector("#search-button")
var searchInputEl = document.querySelector("#search-input")

//creates the array of recyclable items
var recyclableItems = [
  {
    item: "Plastic Bottles",
    disposal: "Recycle plastic bottles through your local recycling program. Make sure to empty and rinse them before recycling."
  },
  {
    item: "Aluminum Cans",
    disposal: "Aluminum cans can be recycled through your local recycling program. Rinse them before recycling."
  },
  {
    item: "Glass Bottles",
    disposal: "Glass bottles can be recycled through your local recycling program. Rinse them before recycling."
  },
  {
    item: "Newspapers",
    disposal: "Newspapers can be recycled through your local recycling program. Keep them clean and dry before recycling."
  },
  {
    item: "Cardboard",
    disposal: "Cardboard can be recycled through your local recycling program. Make sure to flatten it before recycling."
  },
  {
    item: "Paper",
    disposal: "Paper can be recycled through your local recycling program. Keep it clean and dry before recycling."
  },
  {
    item: "Steel Cans",
    disposal: "Steel cans can be recycled through your local recycling program. Rinse them before recycling."
  },
  {
    item: "Batteries",
    disposal: "Batteries should be disposed of properly at battery recycling centers or designated drop-off locations. Do not put them in regular trash."
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
// DATA / STATE

//trying out domcontentloaded
document.addEventListener("DOMContentLoaded", function(){
  //get the recyclable items container
  var recyclableItemsContainer = document.getElementById('recyclable-items-container');

  //Fisher-Yates algorithm - used to shuffle the recyclableItems array
  function shuffleArray(array){
    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

    //need to shuffle the recyclableItems array
    var shuffledItems = shuffleArray(recyclableItems);
    //need to select 5 random items from the shuffled array
    var randomItems = shuffledItems.slice(0, 2);
    console.log(randomItems);
    //cycle through the random items
    randomItems.forEach(function(item){
    //create the html elements
    var itemDiv = document.createElement('div');
    var itemHeading = document.createElement('h3');
    var disposalText = document.createElement('p');
    //need to now set the item name and disposal information as the inner content of the elements
    itemHeading.textContent = item.item;
    disposalText.textContent = "Disposal: " + item.disposal;
    //then append the heading and text to the new div
    itemDiv.appendChild(itemHeading);
    itemDiv.appendChild(disposalText);
    //append the itemdiv to the recyclable items container
    recyclableItemsContainer.appendChild(itemDiv);
});
});



=======
// var geoApifyApiKey = "e2e76a6a2e2341f681a4abfd52c7ec27"


// FUNCTIONS
function getLocation() {
  // Check if geolocation is supported by the browser
  if ("geolocation" in navigator) {
    // Prompt user for permission to access their location
    navigator.geolocation.getCurrentPosition(
      // Success callback function
      (position) => {
        // Get the user's latitude and longitude coordinates
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        // Do something with the location data, e.g. display on a map
        console.log(`Latitude: ${lat}, longitude: ${lng}`);
      },
      // Error callback function
      (error) => {
        // Handle errors, e.g. user denied location sharing permissions
        console.error("Error getting user location:", error);
      }
    );
  } else {
    // Geolocation is not supported by the browser
    console.error("Geolocation is not supported by this browser.");
  }

}
getLocation();

fetch('https://api.geoapify.com/v1/ipinfo?apiKey=' + geoApifyApiKey)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


// USER INTERACTIONS
searchBtnEl.addEventListener("DOMContentLoaded", function() {
  console.log("click")
})

//MODAL CODE
document.addEventListener('click', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('#js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});

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