import React from 'react';
import Mainnav from './mycomponents/navbar/mainnav.jsx';
import Main from './mycomponents/main/main.jsx';

const App = () => {

    const Api_key = "485eb837446e4b66ac420ea17b820a9f";
    const url = "https://newsapi.org/v2/everything?q=";

    window.addEventListener("load", () => fetchNews("INDIA"));

    async function fetchNews(query) {
        const res = await fetch(`${url}${query}&apiKey=${Api_key}`);
        const data = await res.json();
        bindData(data.articles);
    }

    function bindData(articles) {
        const cardsContainer = document.getElementById("cards-container");
        const cardTemplate = document.getElementById("template-news-card");
    
        if (!cardTemplate) {
            console.error("Template card not found");
            return;
        }
    
        articles.forEach((article) => {
            if (!article.urlToImage) return;
    
            // Clone the template
            const cardClone = cardTemplate.cloneNode(true);
            cardClone.style.display = ""; // Make the cloned card visible
    
            // Fill data into the cloned card
            fillDataInCard(cardClone, article);
    
            // Append the cloned card to the container
            cardsContainer.appendChild(cardClone);
        });
    }
    
      
    
      function fillDataInCard(cardClone, article) {
        const newsImg = cardClone.querySelector(".news-img");
        const newsTitle = cardClone.querySelector(".news-title");
        const newsDate = cardClone.querySelector(".news-date");
        const newsDesc = cardClone.querySelector(".news-desc");
    
        // Handle missing elements and data gracefully
        if (newsImg && article.urlToImage) {
            newsImg.src = article.urlToImage;
        } else {
            console.warn("Missing image or image URL:", article);
        }
    
        if (newsTitle) {
            newsTitle.innerHTML = article.title || "No title available";
        }
    
        if (newsDesc) {
            newsDesc.innerHTML = article.description || "No description available";
        }
    
        if (newsDate) {
            const date = new Date(article.publishedAt).toLocaleString("en-US", {
                timeZone: "Asia/Jakarta",
            });
            newsDate.innerHTML = `${article.source.name || "Unknown source"} · ${date}`;
        }
    
        // Add event listener to the first child only if it exists
        if (cardClone.firstElementChild) {
            cardClone.firstElementChild.addEventListener("click", () => {
                if (article.url) {
                    window.open(article.url, "_blank");
                }
            });
        } else {
            console.warn("First child of cardClone is null. Cannot add event listener.");
        }
    }
    //let curSelectedNav = null;

function onNavItemClick(id) {
    // Fetch the news for the clicked item
    fetchNews(id);

    // Get the DOM element for the clicked navigation item
    /*
    const navItem = document.getElementById(id);

    // If there's a previously selected nav item, remove the 'active' class
    if (curSelectedNav) {
        curSelectedNav.classList.remove("active");
    }

    // Set the new nav item as the selected one and add the 'active' class
    curSelectedNav = navItem;
    if (curSelectedNav) {
        curSelectedNav.classList.add("active");
    }
        */
}
    function search_button (){
        const search_text = document.getElementById("search-text");
        const input_value = search_text.value;
        fetchNews(input_value);
    }


    return (
        <>
            <Mainnav onclick={onNavItemClick} search_button={search_button} />
            <Main/>



        </>
    );
};

export default App;
