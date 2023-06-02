//DEPENDECNIES
var newsContent1 = document.getElementsByClassName("content-1")
var newsContent2 = document.getElementsByClassName("content-2")
var newsContent3 = document.getElementsByClassName("content-3")

//DATA

var url = "http://api.mediastack.com/v1/news?access_key=ae6dfa625df6421a33447d4a1dcb0e49&keywords=recycling&limit=4";

// var corsURL = "https://cors-anywhere.herokuapp.com/";


//FUNCTIONS

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(news) {
        console.log(news);
        document.getElementById("story-1").textContent = news.data[1].title
        document.getElementById('link-1').textContent = news.data[1].url
        document.getElementById('link-1').href = news.data[1].url
        document.getElementById('story-2').textContent = news.data[2].title
        document.getElementById('link-2').textContent = news.data[2].url
        document.getElementById('link-2').href = news.data[2].url
        document.getElementById("story-3").textContent = news.data[3].title
        document.getElementById('link-3').textContent = news.data[3].url
        document.getElementById('link-3').href = news.data[3].url
    });
