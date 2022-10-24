
const getApi = async (API) => {
    try {
        const response = await fetch(API);
        if(!response.ok) {
            throw new Error('Failed to get resourse !');
        }
        const result = await response.json();
        return result;

    }catch(error) {
        console.log(error);
        return false;
    }
}

const getCurrentDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today;
}

export { getApi, getCurrentDate };

