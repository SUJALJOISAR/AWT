//function to fetch the data from an API
function fetchDataFromAPI(callback){
    setTimeout(() => {
        const data={
            message:'Data fetched from API'
        };
        //invoke callback with the fetched Data
        callback(null,data);
    }, 2000);
}

//define a callback function to handle the fetched data
function handleFetchedData(error,data){
    if(error){
        console.log('Error:',error);
    }
    else{
        console.log('Fetched Data:',data);
    }
}

fetchDataFromAPI(handleFetchedData);

console.log('Fetching Data...');