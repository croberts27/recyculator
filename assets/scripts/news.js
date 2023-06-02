//DEPENDECNIES
var newsContent1 = document.getElementsByClassName("content-1")
var newsContent2 = document.getElementsByClassName("content-2")
var newsContent3 = document.getElementsByClassName("content-3")

//DATA

var apiKey = 'ba2bdd2816374a669a90bbcd11a3db71';

//FUNCTIONS

var url = 'https://newsapi.org/v2/everthing?' + 'q=Recycling&' + 'from=&' + 'sortBy=popularity&' + 'apiKey=ba2bdd2816374a669a90bbcd11a3db71';

var req = new Request(url);

fetch(req, {mode: 'no-cors'})
    .then(function(data){
        console.log(data.json());
    });
