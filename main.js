const myList = document.querySelector('#data-news-list');
const newsKey = '3a4e263b562b46dbb636f01fe690c1f4';
const url = `https://newsapi.org/v2/top-headlines?q=world&apiKey=${newsKey}`;
const newsRequest = new Request(url);

fetch(newsRequest)
  .then(function(response) { return response.json(); })
  .then(function(data){
    for(let i = 0; i < data.articles.length; i++) {
      let listItem = document.createElement('li');
      listItem.innerHTML = `
        <a href="${data.articles[i].url}" rel="noopener">
          ${data.articles[i].title}
        </a>
        <img class="article__image" src="${data.articles[i].urlToImage}" />
        <p>${data.articles[i].description}</p>
      `;
      myList.appendChild(listItem);
      console.log(data.articles[i].title);
    }
  });