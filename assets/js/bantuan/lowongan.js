import { API } from "../env.js";
import { getApi } from "../data.js";
import { renderJobList } from "../dom.js";
import { checkSession, securityAutenticate } from "../session.js";


document.addEventListener('DOMContentLoaded', () => {
    
    securityAutenticate();
    checkSession();

    getApi(API + "company_help_information").then( data => {

        const jobContent = document.getElementById('job-list');
        jobContent.innerHTML = "";
        const elementResult = document.getElementById('total-result');
        elementResult.innerText = data.length;
        data.forEach( item => {
            const elementJobs = renderJobList(item);
            jobContent.append(elementJobs);
        });

    } );

    const search = document.getElementById('searchJob');

    search.addEventListener('input', (event)=> {
        const searchJob = document.getElementById('searchJob').value;
        getApi(API + 'company_help_information?search=' + event.target.value).then( data => {
            const jobContent = document.getElementById('job-list');
            jobContent.innerHTML = "";
            const elementResult = document.getElementById('total-result');
            elementResult.innerText = data.length;
            data.forEach( item => {
                const elementJobs = renderJobList(item);
                jobContent.append(elementJobs);
            });
        } );
        
    });

});