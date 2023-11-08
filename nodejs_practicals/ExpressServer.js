import express from 'express';
import path from 'path';
import mongoose from 'mongoose';

const users=[];

const app=express();

mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName:"backened",
}).then(()=>{
    console.log("Database connected");
}).catch((e)=>{
    console.log(e);
})

const messageSchema=new mongoose.Schema({
    name:String,
    email:String
});

//basically now we have to create model(which is just fancy name to call collection).we are making collection only
//so we can also delete the collection that we have made in compass 
const Message=mongoose.model("Message",messageSchema);

app.set("view engine","ejs");

// express.static(path.join(path.resolve(),'public'));we will not directly used because it is 'middleware' just use whole in 'use'
// console.log(path.join(path.resolve(),'public'));
//now just we have to provide the static path to that express.static() to access that static index.html file
//so use this 'use'
app.use( express.static(path.join(path.resolve(),'public')));

//using middlewares
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    // res.send("Hello,Express Js Server");//we can use "end" but 'send' is more recommendable
    // res.statusCode=200;
    // res.setHeader('Content-Type','text/plain');
    // res.send(statusCode);
    // res.json({
    //     success:true,
    //     products:[]
    // })//mostly used when we have to fetch data from API in frontend framework like reactjs,express js etc
    // now what if i want to set the status code and also together i want to send the data
    // res.status(200).send("whoo!");//you can see code in console

    //now what if we have backened code only and if we have to access html file then
    // const pathLocation=path.resolve();

    // res.sendFile(path.join(pathLocation,"./index.html"));//by doing this html file will be read

    //now what if we want to send the data from here to index.html and how we can access it?
    //for that we have "render" method
    //for that first of all we have to install 'ejs' ie. html template and embedded javascript
    //mostly used when we have to show the data send by backened to html file on browser
    //now make one folder "view" then just create 'index.ejs' file or move 'index.html' file and rename it'index.ejs'

    //we have to also set the "engine" we are using
    res.render("index.ejs",{name:"sujal"});//remember the engine will always check ".ejs" file in "views" folder only
    //see either add ".ejs" like above or set the "view engine"
    //in your index.ejs write now <%= name %> see here "%=" will indicate that we are not writing html but we are writing variable
});

app.get("/success",(req,res)=>{
    res.render("success");
})

// app.post("/contact",(req,res)=>{ //now here instead of "/" if it was "/contact" then if we run server then it will say that there is not contact like post method means untill we not specify the action method means where the post request has to be gone the default will be "/"
//     // req.body contains the form data sent by user
//     console.log(req.body);
//     // console.log(req.body.name);->will only display name
//     // console.log(req.body.email);->will only display email

//     users.push({username:req.body.name,useremail:req.body.email});
//     // res.render("/success");
//     //we can also use 'redirect' instead of 'render directly'.
//     //for that we have to use 'app.get'
//     res.redirect("/success");
// });
//see here above there will be infinite loop when we click on submit button in form and
//there will be infinite loop because we have not tell about to whom it has to render etc
//and also you will see that in terminal there will be 'undefined' because it is not able to access
//'req.body' because we have to use 'middlewares' to do this functionality 

//see basically there is 'post' request happening and the url that will be specify in action
//on that it will be request happening.

//so in express only there are middlewares like express.urlencoded
//using this middlewares we will be getting like this in terminal->{ name: 'sujaljoisar', email: 'sujaljoisar@gmail.com' }

//lets store in database i.e data coming from user
//for now make one array and store in it

// app.post("/contact",async (req,res)=>{
//     const messageData={username:req.body.name,email:req.body.email};
//     console.log(messageData);
//     await Message.create(messageData);
//     res.redirect("/success");
// });
//now above we will only get email becuase previous we have define "name" not "username"

app.post("/contact",async (req,res)=>{

    const {name,email}=req.body;//to not write req.body again ana again

    await Message.create({name,email});
    res.redirect("/success");
});


app.get("/users",(req,res)=>{
    res.json(users);
})

// app.get("/add",(req,res)=>{
//     Message.create({name:"Abhi",email:"sample@gmail.com"}).then(()=>{
//         res.send("Nice Code");
//     });
// });
//instead of above function, we will make it async and use await keyword
app.get("/add",async (req,res)=>{
   await Message.create({name:"Abhi",email:"sample@gmail.com"});
   res.send("nice code");
});

app.get("/login",(req,res)=>{
    res.render("login");
});

app.post("/logged",(req,res)=>{
    
})


const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});

//first step is simple :-make directory and make one file
//then install express in that particular directory by :-npm install express

//to install nodemon command is npm install -g nodemon
//then just do this one step "open windows powershell and run as administrator"
//then do Set-ExecutionPolicy RemoteSigned
//if we do not do this then nodemon package will not work

//see now when we have to start our server thorugh nodemon package then everytime we write nodemon filename.
//instead of it do this modifications in package.json file
// "start": "node ExpressServer.js",
// "dev":"nodemon ExpressServer.js"

//now if we want to start server through simple node then just write "npm run start" or "npm start"
//and if we want to start server through nodemon then write "npm run dev"

//see there is res.json() used to send the data in json Format i.e object format

//now static files are always added in public folder like  html,css,js files etc
//to access them express.static() is used.

//path.resolve() is used to get the current directory

//lets use now mongoDB in this 
//first of all install mongoDB server Community for windows and then install mongodb compass
//then install mongoose in current directory using "npm i mongoose".

//see direct write the names of css,js files in public folders in views or in an other folders 
//means directly style.css, then only that css will affect on it while if we mention any directories kind of thing then it will not work