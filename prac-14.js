function fetchDataFromAPIAsync(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const data={
                message:"Data fetched from API"
            }
            resolve(data);
        }, 2000);
    });
}

async function callingfun(){
try{
    const fetchedData=await fetchDataFromAPIAsync();
    console.log('fetchedData:-',fetchedData);
}catch(error){
    console.log('error:-',error);
}
}

callingfun();