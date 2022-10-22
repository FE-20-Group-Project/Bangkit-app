import { getApi } from "./data.js";
import { renderInformation, renderArticle } from "./dom.js";
import { API, newsAPI } from "./env.js";

document.addEventListener('DOMContentLoaded', () => {
  
    getApi(newsAPI).then( data => {
        renderInformation(data);

    });

    getApi(API).then( data => {
        
        const contentArticle = document.getElementById('content-article');
        contentArticle.innerHTML = "";

        let index = 0;
        for(let article of data) {
            if( index < 5 ){
                let articleElement = renderArticle(article);

                contentArticle.append(articleElement)
            }
            index++;
        }
    });

});