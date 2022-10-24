import { getApi } from "../data.js";
import { renderInformationProv, renderArticle } from "../dom.js";
import { newsAPI } from "../env.js";
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

    const searchData = document.getElementById('searchData');
    getApi(newsAPI).then( data => {

        data.forEach( element => {
            const option = document.createElement('option');
            option.innerText = element.provinsi;
            searchData.append(option);
        } )
    } );

    searchData.addEventListener('change', (event) => {
        
        getApi(newsAPI + '?name=' + event.target.value).then( data => {

            const contentInformation = document.getElementById('data-covid');
    
            contentInformation.innerHTML = "";
            const elementResult = document.getElementById('total-result');
            elementResult.innerText = data.length;
            for( let item of data ) {
                    let dataProv = renderInformationProv(item);
                    contentInformation.append(dataProv);
            }
        });

    });

});