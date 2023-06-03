//DEPENDECNIES
var newsContent1 = document.getElementsByClassName("content-1")
var newsContent2 = document.getElementsByClassName("content-2")
var newsContent3 = document.getElementsByClassName("content-3")

//DATA

//This api allows 200 calls per day
const url = 'https://newsdata2.p.rapidapi.com/news?language=en&q=sustainability%20AND%20recycling';

//FUNCTIONS

// good template to use for fetch requests
//  fetch(url)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(news) {
//         console.log(news);
//         document.getElementById("story-1").textContent = news.data[1].title
//         document.getElementById('link-1').textContent = news.data[1].url
//         document.getElementById('link-1').href = news.data[1].url
//         document.getElementById('story-2').textContent = news.data[2].title
//         document.getElementById('link-2').textContent = news.data[2].url
//         document.getElementById('link-2').href = news.data[2].url
//         document.getElementById("story-3").textContent = news.data[3].title
//         document.getElementById('link-3').textContent = news.data[3].url
//         document.getElementById('link-3').href = news.data[3].url
//     });



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a96648bf97msh07572d567100729p1b9b8cjsn3bc7717c8d90',
		'X-RapidAPI-Host': 'newsdata2.p.rapidapi.com'
	}
};

fetch(url, options)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        document.getElementById('story-1').textContent = data.results[1].title
        document.getElementById('link-1').textContent = data.results[1].link
        document.getElementById('link-1').href = data.results[1].link
        document.getElementById('story-2').textContent = data.results[4].title
        document.getElementById('link-2').textContent = data.results[4].link
        document.getElementById('link-2').href = data.results[4].link
        document.getElementById('story-3').textContent = data.results[7].title
        document.getElementById('link-3').textContent = data.results[7].link
        document.getElementById('link-3').href = data.results[7].link
    })
