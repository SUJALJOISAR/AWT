const condition=true;

if(condition){
    import ('./module1.js').then((module1)=>{
        module1.first();
    }).catch((error)=>{
        console.log("error in importing modolue first");
    })
}
else{
    import('./module2.js').then((module2)=>{
               module2.second();
    }).catch((error)=>{
        console.log("error in importing module second");
    })
}