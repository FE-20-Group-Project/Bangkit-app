//Environment
const API = 'https://6350c3703e9fa1244e4c9abd.mockapi.io/bangkit/';
const newsAPI = 'https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/more';


const isStorageExist = () => {
    if(sessionStorage) {
        return true;
    }
    else {
        console.log('Browsermu tidak mendukung session storage');
    }
}

export { API, newsAPI, isStorageExist };