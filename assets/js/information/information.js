import { getApi } from "../data.js";
import { renderInformationProv, renderArticle } from "../dom.js";
import { API, newsAPI } from "../env.js";
import { checkSession } from "../session.js";

document.addEventListener('DOMContentLoaded', () => {

    checkSession();
  
    getApi(newsAPI).then( data => {

        const contentInformation = document.getElementById('data-covid');

        contentInformation.innerHTML = "";
       
        for( let item of data ) {
                let dataProv = renderInformationProv(item);
                contentInformation.append(dataProv);
        }
    });

    getApi(API + 'article').then( data => {
        
        const contentArticle = document.getElementById('content-article');
        contentArticle.innerHTML = "";

        for(let article of data) {
                let articleElement = renderArticle(article);

                contentArticle.append(articleElement)
        }
    });

});