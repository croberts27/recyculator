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