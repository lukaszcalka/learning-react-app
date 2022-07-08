


async function fetchJSON(uri){
    let returnData = await fetch(uri)
    .then(async response => {
        const jsonData =  response.json();
        if (!response.ok) {
            const error = (jsonData && jsonData.message) || response.status;
            return Promise.reject(error);
        }
        return jsonData;
    }).then(data => {return data;})
    .catch(error => {
        console.error('There was an error!', error);
    });
    return returnData;
}

export {fetchJSON};