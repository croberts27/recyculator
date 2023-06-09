// DEPENDENCIES
var searchBtnEl = document.querySelector("#search-button")
var searchInputEl = document.querySelector("#search-input")
// The following variables fill in the green tile when someone enters a search
var recycleInfoEl = document.querySelector("#recyclable-items-container")
var cardHeaderEl = document.querySelector("#card-header")
var disposalHeaderEl = document.querySelector("#how-to-recycle")
var cardContentEl = document.querySelector("#card-content")
var altHeaderEl = document.querySelector("#alternative-uses")
var altContentEl = document.querySelector("#alternative-content")

// var recycleCard = document.querySelector("#recycle-card")

// // DATA / STATE
var resourceBtn;

// User will enter their name and email into the boxes at the footer of the page
function userFormSubmit (event){
  event.preventDefault();
  // target the boxes on the html 
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
// their information will be stored into local storage 
  localStorage.setItem('recyculatorName', name);
  localStorage.setItem('recyculatorEmail', email);
// would like to then welcome the user back
}
//needed to call the listener to the submit button! its below:
var submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', userFormSubmit)
submitButton.addEventListener('click', clearForm)

function clearForm (){
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
}


//trying out domcontentloaded
document.addEventListener("DOMContentLoaded", function(){
//LETS ADD THE USER GREETING TO THE PAGE WHEN IT LOADS
  //define the variable to capture the data from local storage
  var storedName = localStorage.getItem("recyculatorName")
  //if statement to greet the user when they land on the screen
  if (storedName) {
    var greetingElement = document.getElementById("userName");
    greetingElement.textContent = 'Welcome back ' + storedName + '!';
  };


//THIS IS WHAT IS DRIVING THE SHUFFLE OF THE ARRAY ON THE YELLOW BOX
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
    disposal: "Make sure to empty and rise them before recycling.",
    alternative: "Fill clean bottles with unrecyclable plastic to make eco-bricks"
  },
  {
    item: "Aluminum Cans",
    disposal: "Rinse and drain before recycling. Do not crush cans as they can end up sorted in the wrong place.",
    // source: https://www.familyhandyman.com/article/why-you-shouldnt-crush-aluminum-cans/#:~:text=That%20means%20crushed%20cans%20may,Here's%20why.
    alternative: "Several charities collect the tabs of aluminum cans. Gather aluminum tabs and find a local charity drop-off"
  },
  {
    item: "Glass Bottles",
    disposal: "Make sure to rinse them before recycling.",
    alternative: ""
  },
  {
    item: "Newspapers",
    disposal: "Make sure to keep them clean and dry before recycling.",
    alternative: ""
  },
  {
    item: "Cardboard",
    disposal: "Make sure to flatten it before recycling.",
    alternative: ""
  },
  {
    item: "Paper",
    disposal: "Make sure to keep it clean and dry before recycling.",
    alternative: "Check your local post office to see if they accept paper recycling"
  },
  {
    item: "Steel Cans",
    disposal: "Make sure to rinse them before recycling.",
    alternative: ""
  },
  {
    item: "Batteries",
    disposal: "Make sure to rinse them before recycling.",
    alternative: ""
  },
  {
    item: "Electronics",
    disposal: "Electronics should be recycled through electronic waste (e-waste) recycling programs or facilities. Check for local e-waste recycling options.",
    // source: https://www.bestbuy.com/site/services/recycling/pcmcat149900050025.c?id=pcmcat149900050025
    alternative: "Best Buy offers recycling for electronics. You can drop off up to three items per day at a Best Buy location"
  },
  {
    item: "Ink Cartridges",
    disposal: "Ink cartridges can be recycled through various cartridge recycling programs.",
    alternative: "Drop your empty ink cartridges at Walmart, Target, Best Buy, or any office supply store."
  },
  {
    item: "Aluminum Foil",
    disposal: "Scrunch up into a ball the size of a tennis ball.",
    alternative: "Flatten, wash and store used foil for resue at a later time."
  },
  {
    item: "Garden Hose",
    disposal: "DO NOT RECYCLE. These are considered tanglers and can actually disrupt the recycling process.",
    alternative: "Make it into an outdoor extension cord protector by slitting the hose along its length and pushing the extension cord inside."
  },
  {
    item: "Bricks",
    disposal: "A recycler has a few options for recycling the brick. It can be crushed into gravel-size pieces and used as ground cover for yards or as a substitute for mulch. Crushed into powder, it can be used on baseball diamonds, running tracks, or tennis courts. In some cases, crushed bricks can even go into making new bricks.",
    alternative: "Turn into bookshelves by stacking bricks at both ends and laying plywood between the bricks."
  },
  {
    item: "Brooms",
    disposal: "Try to keep and reuse them for as long as possible",
    alternative: "Insert the brooms handle into the ground and tie small trees to it. This helps to prevent sagging, wind deformation, running over it with a lawn mower, etc."
  },
  {
    item: "Clothes Hangers",
    disposal: "Include with your metal recycling and place in the container.",
    alternative: "Return to the nearest dry cleaner so they can reuse them."
  },
  {
    item: "Pillows",
    disposal: "You can drop off pillows to the American Textile Recycling Services (ATRS) who normally provide drop-off bins.  ",
    alternative: "Cut it in half, sew along the open end and make into two smaller camping pillows. Consider donating to a homeless shelter, animal shelter or wildlife rehabiliation center."
  },
  {
    item: "Motor Oil",
    disposal: "Find a refinery near you where the oil can be re-fined into lubricants, processed into fuel oils, and used as raw materials for the refining and petrochemical industries.",
    alternative: "Check with your local mechanic. They may accept used oil for recycling or repurposing."
  },
  {
    item: "Styrofoam",
    disposal: "Search for a local recycling center that specifically allows styrofoam, also known as polystyrene",
    alternative: "Use non-styrofoam cups and containers to reduce styrofoam waste"
  },
  {
    item: "Carpet",
    disposal: "You can contact your nearest carpet supplier to confirm if they accept drop-offs.",
    alternative: "Cut into small squares or cirlces and place under the feet of heavy furniture."
  },
  {
    item: "Plastic Bags",
    disposal: "Collect and take to a local supermarket for recycling",
    alternative: "Reuse as a small trash bag"
  }
];
//testing recyclableItems var
console.log(recyclableItems);

// Our instructor Ben Wright showed us how to create a new array from an existing array
var itemsToRecycle = recyclableItems.map(function(recyclableItem){
  return recyclableItem.item;
});

var disposalInfo = recyclableItems.map(function(recyclableItem){
  return recyclableItem.disposal;
});

var alternativeInfo = recyclableItems.map(function(recyclableItem){
  return recyclableItem.alternative;
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
  // .indexOf() and .includes() were found in an article on freecodecamp.org (link in the README)
  var itemIndex = itemsToRecycle.indexOf(searchInputEl.value)
  var isItem = itemsToRecycle.includes(searchInputEl.value)
  cardHeaderEl.textContent = searchInputEl.value

  if (isItem) {
    disposalHeaderEl.textContent = "How to Recycle:"
    cardContentEl.textContent = disposalInfo[itemIndex]
    altHeaderEl.textContent = "Alternatives to Recycling:"
    altContentEl.textContent = alternativeInfo[itemIndex]
   
  } else {
    cardContentEl.textContent = "That's a great question! Our database does not include this item yet, but you can check out our Resources page for more places to search"
    resourceBtn = document.createElement("button")
    // a W3 schools articles gave information on how to create a link within JavaScript (see README for the link)
    resourceBtn.classList.add('button')
    resourceBtn.classList.add('is-warning')
    recycleInfoEl.appendChild(resourceBtn)
    var resourceLink = document.createElement("a")
    resourceLink.innerHTML = "Go to Resources"
    resourceLink.title = "resources-link"
    resourceLink.href = "./assets/resources.html"
    resourceBtn.appendChild(resourceLink)
  }
  
  
  
}

// USER INTERACTIONS
// When a user clicks on the search button, a series of events takes place:
searchBtnEl.addEventListener("click", function() {
  // 1. the search returns a card with information on the recyclable item
  console.log(searchInputEl.value)
  if (disposalHeaderEl.textContent !== "") {
    disposalHeaderEl.textContent = ""
  };
  if (altHeaderEl.textContent !== "") {
    altHeaderEl.textContent = ""
  };
  if (altContentEl.textContent !== "") {
    altContentEl.textContent = ""
  }
  if (resourceBtn) {
    resourceBtn.remove()
  }
  fillRecycleCard()
  searchInputEl.value = ""
  

  // 2. recycling locations are identified near the user's location


  // 3. the recycling locations are displayed on the map


  // 4. a card displays information on the nearest location

})

// INITIALIZATIONS


//   let map;

//   function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 40.809013027658104,  lng:  -73.96227161360441 },
//     zoom: 8,
//   });

// // initMap();
// }
