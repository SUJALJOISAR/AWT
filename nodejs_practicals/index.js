// console.log("hello world");

//old method to import modules
// const http= require("http");
// console.log(http);

//new method to import modules
import http from "http";

//Now this http we can access any function and also create our server.
//first way->Using arrow function
// const server=http.createServer(()=>{
//     console.log("Servered");
// })

//second way->Using function() keyword
// http.createServer(function(){

// })


// const name=require("./features");
//     console.log(name); 
// import name from "./features.js";
// import {name2,name3} from "./features.js";
// console.log(name2);
// console.log(name3);

//or this way in one line we can write
// import name, { name2,name3 } from "./features.js";
// console.log(name); 
// console.log(name2);
// console.log(name3);

//We can also import everything as an one object
import *  as Myobj from "./features.js";
console.log(Myobj);
//or we can access one of the values from that
//console.log(Myobj.name);
//console.log(Myobj.name2);
//console.log(Myobj.name3);

import {fun1} from './features.js';
console.log(fun1());

import fs from "fs";//to read and write in any file 
// const home=fs.readFile('./first.html',()=>{
//     console.log("File read");
// });
// console.log(home);
//See here This above line execute first and then that Server is working line and at last this File read line is run.
const home=fs.readFileSync("./first.html");//meaning of this is that untill this gets over nothing will start other than this.

import path  from "path";
console.log(path.extname("/home/random/first.html"));//will show the extension name
console.log(path.dirname("./home/random/first.html"));//will show the directory name

const server=http.createServer((req,res)=>{
    // console.log(req.url);
    // res.end("NodejS");
    // res.end("<h1>NodeJS</h1>");

    console.log(req.method);//will show the methods from this :-GET, POST, DELETE, AND PUT.

    if(req.url ==="/about"){
        res.end("<h1>About Page</h1>");
    }

    // else if(req.url === "/"){
    //     fs.readFile('./first.html',(err,home)=>{
    //         res.end(home); 
    //     });
    //     // res.end("<h1>Home Page</h1>");
    // }
    //or
    else if(req.url === "/"){
            res.end(home);
        // res.end("<h1>Home Page</h1>");
    }

    else if(req.url === "/contact"){
        res.end("<h1>Contact Page</h1>");
    }
    else if(req.url === '/demo'){
        res.end(`<h1>Random No is ${fun1()}</h1>`);
    }
    else{
        res.end("<h1>Page Not Found</h1>");
    }

})

server.listen(5000,()=>{
    console.log("Server is Working");
})