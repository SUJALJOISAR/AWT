//funtion to fetch the data from API
function fetchDataFromAPI(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const data={
                message:"Data is fetched from API"
            }
            resolve(data);
        }, 2000);

        setTimeout(() => {
            reject('Error:API request Failed');
        }, 2000);
    });
}

fetchDataFromAPI().then((data)=>{
    console.log("Fetched Data:",data);
}).catch((error)=>{
    console.log("Error:",error);
})

console.log('Fetching Data...');