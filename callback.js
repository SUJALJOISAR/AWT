console.log("Welcome to Callback Concept");

function loginUser(email,password,callback){
    //callback
    setTimeout(() => {
        console.log("Data from Login User");
        return {userEmail:email};
        callback({userEmail:email})
    }, 5000);
}

const user1=loginUser("test@Example.com",123456,user1 =>{
    console.log(user1);
})

// const user1 = loginUser("test@example.com",123456)
// console.log(user1);