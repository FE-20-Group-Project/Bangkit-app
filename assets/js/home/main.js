import { getApi } from "../data.js";
import { renderInformation, renderArticle } from "../dom.js";
import { API, newsAPI } from "../env.js";
import { checkSession} from "../session.js";


document.addEventListener('DOMContentLoaded', () => {


    checkSession();
  
    getApi(newsAPI).then( data => {
        //Covid Information Home Page
        renderInformation(data);
    });

    getApi(API + 'article').then( data => {
        
        const contentArticle = document.getElementById('content-article');
        contentArticle.innerHTML = "";

        let index = 0;
        for(let article of data) {
            if( index < 3 ){
                let articleElement = renderArticle(article);

                contentArticle.append(articleElement)
            }
            index++;
        }
    });

});