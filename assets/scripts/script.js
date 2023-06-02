// DEPENDENCIES
var searchBtnEl = document.querySelector("#search-button")
var searchInputEl = document.querySelector("#search-input")
var recycleInfoEl = document.querySelector("#recyclable-items-container")
var cardHeaderEl = document.querySelector("#card-header")
var cardContentEl = document.querySelector("#card-content")
// var recycleCard = document.querySelector("#recycle-card")

// //creates the array of recyclable items
// var recyclableItems = [
//   {
//     item: "Plastic Bottles",
//     disposal: "Recycle plastic bottles through your local recycling program. Make sure to empty and rinse them before recycling."
//   },
//   {
//     item: "Aluminum Cans",
//     disposal: "Aluminum cans can be recycled through your local recycling program. Rinse them before recycling."
//   },
//   {
//     item: "Glass Bottles",
//     disposal: "Glass bottles can be recycled through your local recycling program. Rinse them before recycling."
//   },
//   {
//     item: "Newspapers",
//     disposal: "Newspapers can be recycled through your local recycling program. Keep them clean and dry before recycling."
//   },
//   {
//     item: "Cardboard",
//     disposal: "Cardboard can be recycled through your local recycling program. Make sure to flatten it before recycling."
//   },
//   {
//     item: "Paper",
//     disposal: "Paper can be recycled through your local recycling program. Keep it clean and dry before recycling."
//   },
//   {
//     item: "Steel Cans",
//     disposal: "Steel cans can be recycled through your local recycling program. Rinse them before recycling."
//   },
//   {
//     item: "Batteries",
//     disposal: "Batteries should be disposed of properly at battery recycling centers or designated drop-off locations. Do not put them in regular trash."
//   },
//   {
//     item: "Electronics",
//     disposal: "Electronics should be recycled through electronic waste (e-waste) recycling programs or facilities. Check for local e-waste recycling options."
//   },
//   {
//     item: "Ink Cartridges",
//     disposal: "Ink cartridges can be recycled through various cartridge recycling programs. Check with office supply stores or manufacturers for recycling options."
//   }
// ];
// // DATA / STATE


//trying out domcontentloaded
document.addEventListener("DOMContentLoaded", function(){
  //get the recyclable items container

  var recyclableItemsContainer = document.getElementById('scroll-content');

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
    //need to select 2 random items from the shuffled array
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
//     //then append the heading and text to the new div
    itemDiv.appendChild(itemHeading);
    itemDiv.appendChild(disposalText);
//     //append the itemdiv to the recyclable items container
    recyclableItemsContainer.appendChild(itemDiv);
});
});


// DATA / STATE
// this is where empty variables will go

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
  },
  {
    item: "Alumnimum Cans",
    disposal: "Scrunch up into a ball the size of a tennis ball.",
    alternative: "Flatten, wash and store used foil for resue at a later time."
  },
  {
    item: "Garden Hose",
    disposal: "",
    alternative: "Make it into an outdoor extension cord protector by slitting the hose along its length and pushing the extension cord inside."
  },
  {
    item: "Bricks",
    disposal: "",
    alternative: "Turn into bookshelves by stacking bricks at both ends and laying plywood between the bricks."
  },
  {
    item: "Broom Handles",
    disposal: "",
    alternative: "Insert into the ground and tie small trees to it. This helps to prevent sagging, wind deformation, running over it with a lawn mower, etc."
  },
  {
    item: "Clothes Hangers",
    disposal: "",
    alternative: "Return to the nearest dry cleaner so they can reuse them."
  },
  {
    item: "Pilows",
    disposal: "",
    alternative: "Cut it in half, sew along the open end and make into two smaller camping pillows."
  },
  {
    item: "Motor Oil",
    disposal: "",
    alternative: ""
  },
  {
    item: "Styrofoam",
    disposal: "",
    alternative: "Don't use!"
  },
  {
    item: "Carpet",
    disposal: "",
    alternative: "Cut into small squares or cirlces and place under the feet of heavy furniture."
  }
];
//testing recyclableItems var
console.log(recyclableItems);

var itemsToRecycle = recyclableItems.map(function(recyclableItem){
  return recyclableItem.item;
});

var disposalInfo = recyclableItems.map(function(recyclableItem){
  return recyclableItem.disposal;
});




// FUNCTIONS

// This is the autocomplete function- when a user starts to enter an item to recycle, the autocomplete fills in the search from the array below
$( function(){
  // var itemsToRecycle = recyclableItems.map(function(recyclableItem){
  //   return recyclableItem.item;
  // });

console.log(itemsToRecycle)
  $("#search-input").autocomplete({
    source: itemsToRecycle
  });
});

function fillRecycleCard() {
  // if (searchInputEl.value === recyclableItem.item) {
  //   console.log("The card will read: "+ searchInputEl.value)
  // } 
  // recycleCard.textContent = searchInputEl.value
  // recycleInfoEl.appendChild(recycleCard)
  var itemIndex = itemsToRecycle.indexOf(searchInputEl.value)
  // console.log(disposalInfo[itemIndex])
  cardHeaderEl.textContent = searchInputEl.value
  cardContentEl.textContent = disposalInfo[itemIndex]
  
}

// USER INTERACTIONS
// When a user clicks on the search button, a series of events takes place:
searchBtnEl.addEventListener("click", function() {
  // 1. the search returns a card with information on the recyclable item
  console.log(searchInputEl.value)

  fillRecycleCard()
  searchInputEl.value = " "
  // 2. recycling locations are identified near the user's location


  // 3. the recycling locations are displayed on the map


  // 4. a card displays information on the nearest location

})

// INITIALIZATIONS


    let map;

  function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.809013027658104,  lng:  -73.96227161360441 },
    zoom: 8,
  });


// initMap();
}
