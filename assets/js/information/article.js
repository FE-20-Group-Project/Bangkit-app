import { getApi } from "../data.js";
import { renderInformationProv, renderArticle } from "../dom.js";
import { API } from "../env.js";
import { checkSession } from "../session.js";


document.addEventListener('DOMContentLoaded', () => {

    checkSession();

    getApi(API + 'article').then( data => {
        
        const contentArticle = document.getElementById('content-article');
        contentArticle.innerHTML = "";

        for(let article of data) {
                let articleElement = renderArticle(article);

                contentArticle.append(articleElement)
        }
    });
});