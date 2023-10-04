'use strict';
//let keyword is used at block level
let x=1;

if(x === 1){
    let x=2;

    console.log(x);//2
}

console.log(x);//1
//Syntax
// let name1;
// let name1 = value1;
// let name1 = value1, name2 = value2;
// let name1, name2 = value2;
// let name1 = value1, name2, /* …, */ nameN = valueN;
//let is used for block level

//var keyword
var y=1;

if(y === 1){
    var y=2;

    console.log(y);//2
}

console.log(y);//2
//var is used as functional as well as global level


//arrow functions
function sum(a,b){
    return a+b;
}
console.log(`the sum of two numbers is ${sum(1,2)}`);

const sum1=(a,b)=>{
    return a+b;
}
console.log(`the sum of two numbers is ${sum1(1,2)}`);

//spread off (...)parameter
// The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

// Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element. See rest parameters and rest property.
function add(x,y,z){
    return x+y+z;
}

const numbers=[1,2,3];

console.log(add(...numbers));
//syntax
// Spread syntax can be used when all elements from an object or array need to be included in a new array or object, or should be applied one-by-one in a function call's arguments list. There are three distinct places that accept the spread syntax:
// myFunction(a, ...iterableObj, b)
// [1, ...iterableObj, '4', 'five', 6]
// { ...obj, key: 'value' }

// Only iterable objects, like Array, can be spread in array and function parameters. Many objects are not iterable, including all plain objects that lack a Symbol.iterator method:
const obj = {key1:"value1"};
// const arr=[...obj]; will give error:- obj is not iterable

// On the other hand, spreading in object literals enumerates the own properties of the object. For typical arrays, all indices are enumerable own properties, so arrays can be spread into objects.
const arr=[1,2,3];
const obj2={...arr};
console.log(obj2);//{ '0': 1, '1': 2, '2': 3 }


// Any argument in the argument list can use spread syntax, and the spread syntax can be used multiple times.
function myfun(v,w,x,y,z){
    console.log(v);
    console.log(w);
    console.log(x);
    console.log(y);
    console.log(z);
}
const args=[0,1];
myfun(-1,...args,2,...[3]);

// Without spread syntax, to create a new array using an existing array as one part of it, the array literal syntax is no longer sufficient and imperative code must be used instead using a combination of push(), splice(), concat(), etc. With spread syntax this becomes much more succinct:
const parts = ["html","css","js"];
const p2=["reactjs","mongodb","nodejs","expressjs",...parts];
console.log(p2);

//used in copying array
const arr3 = [1, 2, 3];
const arr2 = [...arr3]; // like arr.slice()

arr2.push(4);
//  arr2 becomes [1, 2, 3, 4]
//  arr remains unaffected


//used in concating arrays,strings
let arr1 = [0, 1, 2];
const arr4 = [3, 4, 5];

arr1 = [...arr1, ...arr4];
// arr1 is now [0, 1, 2, 3, 4, 5]

// Spread in object literals
// Shallow-cloning (excluding prototype) or merging of objects is possible using a shorter syntax than Object.assign()
const obj1 = { foo: "bar", x: 42 };
const obj3 = { foo: "baz", y: 13 };

const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj3 };
// { foo: "baz", x: 42, y: 13 }

// Note that Object.assign() can be used to mutate an object, whereas spread syntax can't.
const obj5 = { foo: "bar", x: 42 };
Object.assign(obj5, { x: 1337 });
console.log(obj5); // { foo: "bar", x: 1337 }
// Object.assign(obj5, {x:12,foo:"hello"});
// console.log(obj5);
//see here using Object.assign() can change the value of x due to its syntax. while spreadoff operator does not change

const obj6={ foo: "bar", x: 42 };
// const obj7={...obj6,{x:46}}; will give the error because we can't change the value of object using spread off operator while we can change using assign() method

// In addition, Object.assign() triggers setters on the target object, whereas spread syntax does not.
const objectAssign = Object.assign(
    {
        set foo(val){
            console.log(val);
        },
    },
    {foo:1},
);
// Logs "1"; objectAssign.foo is still the original setter

const spread = {
    set foo(val) {
      console.log(val);
    },
    ...{ foo: 1 },
  };
  // Nothing is logged; spread.foo is 1

  //For...of operator
  const array1=['a','b','c'];
  for(const arr of array1){
    console.log(arr);
  }
  //syntax
//   for (variable of iterable)
//   statement
//here variable can be let,var,const 

//For..in operator
const object = {a:1,b:2,c:3};
for(const property in object){
    console.log(`${property}:${object[property]}`);
}
//syntax
// for (variable in object)
//   statement


//Foreach Loop
const array4 = ['a', 'b', 'c'];

array4.forEach((element) => console.log(element));

//proper understand from this
let birds=["parrot","peacock","eagle"]
for(const bird of birds){
    console.log(bird)
}
//o/p 
//parrot
//peacock
//eagle

for(const bird in birds){
 console.log(bird)
}
//o/p
// 0
// 1
// 2

//means If we Use For..of Operator then it will give directly the element inside the Iterable object like array, string etc
//But if we use For..in Operator then it will give the indexes of the elements of Iterable objects 

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

//The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const map1 = new Map();
map1.set('a',1);
map1.set('b',2);
map1.set('c',3);

console.log(map1.get('a'));
//1

map1.set('a',46);
console.log(map1.size);

map1.delete('b');
console.log(map1.size);

for(const ele of map1){
    console.log(ele);
}

//set
// The Set object lets you store unique values of any type, whether primitive values or object references.


//classes
// Declaration
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
  
  // Expression; the class is anonymous but assigned to a variable
  // const Rectangle = class {
  //   constructor(height, width) {
  //     this.height = height;
  //     this.width = width;
  //   }
  // };
  
  // Expression; the class has its own name
  // const Rectangle = class Rectangle2 {
  //   constructor(height, width) {
  //     this.height = height;
  //     this.width = width;
  //   }
  // };

  //Default Parameters
  function multiply(a, b = 1) {
    return a * b;
  }
  
  console.log(multiply(5, 2));
  // Expected output: 10
  
  console.log(multiply(5));
  // Expected output: 5


  //Rest Parameters
  // The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.

  function sum(...theArgs){
    let tot=0;
    for(const e of theArgs){
      tot+=e;
    }
    return tot;
  }

  console.log(sum(1,2,3));
  console.log(sum(1,2,3,4));
  //syntax
  // function f(a, b, ...theArgs) {
  //   // …
  // }
  
  function myFun(a,b,...many){
    console.log(a);
    console.log(b);
    many.forEach((element)=>{
      console.log(`Element is ${element}`);
    })
  }

  myFun("one","two","three","four","five","six");

  // A function definition can only have one rest parameter, and the rest parameter must be the last parameter in the function definition.
//   function wrong1(...one, ...wrong) {}
// function wrong2(...wrong, arg2, arg3) {}
//above is not possible


//symbol
// Symbol is a built-in object whose constructor returns a symbol
// Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object.
// Every Symbol() call is guaranteed to return a unique Symbol.
//Every Symbol.for("key") call will always return the same Symbol for a given value of "key". 
// When Symbol.for("key") is called, if a Symbol with the given key can be found in the global Symbol registry, that Symbol is returned. 
// Otherwise, a new Symbol is created, added to the global Symbol registry under the given key, and returned.

// To create a new primitive Symbol, you write Symbol() with an optional string as its description:
const sym1=Symbol();
const sym2=Symbol("foo");
const sym3=Symbol("foo");
// Note that Symbol("foo") does not coerce(collide with) the string "foo" into a Symbol. It creates a new Symbol each time:
console.log(Symbol("foo") === Symbol("foo"));//false

//We can't declare Symbol using "new" operator
// const sym4=new Symbol();//error
// This prevents authors from creating an explicit Symbol wrapper object instead of a new Symbol value and might be surprising as creating explicit wrapper objects around primitive data types is generally possible (for example, new Boolean, new String and new Number).

// If you really want to create a Symbol wrapper object, you can use the Object() function:
const sym6=Symbol("foo");
typeof sym6;//"symbol"

const symObj=Object(sym6);
typeof symObj;//"object"

//mostly symbol is used in encapsulation
// Because symbols are the only primitive data type that has reference identity (that is, you cannot create the same symbol twice), they behave like objects in some way

//synchronous programming
//it simply means the tasks will be executed one by one.Also it will be order wise executed.
//for eg:-
function prompt(message) {
  // Your implementation of prompt goes here
}

function alert(message) {
  // Your implementation of alert goes here
}

var name = prompt('what is your name?');
var age = prompt('what is your age?');
var color = prompt('what is your favorite color?');
alert(`${name}, ${age}, ${color}`);


//Asynchronous programming
//Now Asynchronous programming allows multiple things to be execute at one time while synchronous programming does not.

//There are 3 way to acheive this:-
// 1)async/wait
// 2)promises
// 3)Callbacks

//basically asynchronous functions run in background. if the function is going to take 3ms to complete then it will not block other functions. it will let him to complete before that function execute. 
//for eg:-
console.log('start');
setTimeout(() => {
  console.log('hey i am good');
},2000);
console.log('end');
//output:-
//start
//end
//hey i am good ->this will executed after 2ms.

//some basic of callback functions
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// There are two ways in which the callback may be called: synchronous and asynchronous. Synchronous callbacks are called immediately after the invocation of the outer function, with no intervening asynchronous tasks, while asynchronous callbacks are called at some point later, after an asynchronous operation has completed.


//without using callback function 
// function loadscript(src){
//   // var script=document.createElement('script'); here it will show error as it is just js page we need html page for it 
//   script.src=src;
//   script.onload=()=>{
//     console.log(`Script Loaded ${src}`);
//   }
//   document.body.appendChild(script);
// }

// loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js");
// //see in o/p we will see nothing as it is bootstrap js so it will automatically loaded.

//now if we want that after loading the script another function should be called.
// function loadscript(src,callback){
//   // var script=document.createElement('script'); here it will show error as it is just js page we need html page for it 
//   script.src=src;
//   script.onload=()=>{
//     console.log(`Script Loaded ${src}`);
//     callback(null,src);
//   }
//   script.onerror = function(){
//     console.log("Error has come in SRC:"+src); 
//     callback(new Error("Src got some error"),src);
//   }
//   document.body.appendChild(script);
// }

// function helloworld(error,src){
//   if(error){
//     console.log(error);
//     return;
//   }
//   console.log("helloworld");
// }

// loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js",helloworld);
//so see here after script will be loaded and the helloworld function will be called.

//also we can handle the callback error

//Errors of the callback functions:-
// 1)callback hell:-if we wanted to do some oper after some part is executed but it dosen't executed then it is called callback hell
// 2)pyramid doom:-calling same function under another function. in other words nesting of functions of functions.

//callback functions

const faculties=[{
  name:"MLR",
  Subject:"ML",
},{
  name:"Martin Parmar",
  Subject:"AI",
}];
//above is array

function enrollFaculty(faculty){
  setTimeout(() => {
    faculties.push(faculty);
  }, 5000);
}

function getFaculty(){
  setTimeout(() => {
    console.log(faculties);
  }, 1000);
}

let newFaculty = {name:"Sneha Padhiar",Subject:"SE"};
enrollFaculty(newFaculty);
getFaculty();

//see now here the faculty get enrolled in 5ms and it will be enrolled in background but the getFaculty function will execute when its timeout gets over i.e it will execute in 1ms .
//so we will get this output only .
// [
//   { name: 'MLR', Subject: 'ML' },
//   { name: 'Martin Parmar', Subject: 'AI' }
// ]
//we will not get newFaculty.

//to acheive this we use callback funtion. we will give callback function to function enrollFaculty() so that when it completes his work of enrolling then after that only the getFaculty function will be called.

const faculties1=[{
  name:"MLR",
  Subject:"ML",
},{
  name:"Martin Parmar",
  Subject:"AI",
}];
//above is array

function enrollFaculty1(faculty,Callback){
  setTimeout(() => {
    faculties1.push(faculty);
    Callback();
  }, 5000);
}

function getFaculty1(){
  setTimeout(() => {
    console.log(faculties1);
  }, 1000);
}

let newFaculty1 = {name:"Sneha Padhiar",Subject:"SE"};
enrollFaculty1(newFaculty1,getFaculty1);
// getFaculty1();

//see now output will be
// [
//   { name: 'MLR', Subject: 'ML' },
//   { name: 'Martin Parmar', Subject: 'AI' },
//   { name: 'Sneha Padhiar', Subject: 'SE' }
// ]
//in short using callback function will execute first and then only the other function will execute after its completion.

//anuj bhaiya callback functions
const calculate=(a,b,operation)=>{
  return operation(a,b);
}
//see here 'operation' function acts as an callback function as after taking two variables by calculate function
//third thing we have to pass is the function that either do some operation on this variables.

const sub=(a,b)=> a-b;

const ans=calculate(3,4,(num1,num2)=>{
  return num1+num2;
})

const ans2=calculate(4,3,sub);

console.log(ans);
//o/p:-7

console.log(ans2);
//o/p:-1




//promises
// Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function

// Imagine a function, createAudioFileAsync(), which asynchronously generates a sound file given a configuration record and two callback functions: one called if the audio file is successfully created, and the other called if an error occurs.

// function successCallback(result){
//   console.log(`Audio file ready at URL:${result}`);
// }

// function failureCallback(error){
//   console.error(`Error generating audio file:${error}`);
// }

// createdAudioFileAsync(audioSetting,successCallback,failureCallback);

//if we write the above function in form of promise then:-
// createdAudioFileAsync(audioSetting).then(successCallback,failureCallback);

// A common need is to execute two or more asynchronous operations back to back, where each subsequent operation starts when the previous operation succeeds, with the result from the previous step

// doSomething(function(result){
  
//   doSomethingElse(result,function(newResult){
    
//     doThirdThing(newResult,function(finalResult){
//       console.log(`Got the final result:${finalResult}`)
//     },failureCallback);

//   },failureCallback);

// },failureCallback);

// // With promises, we accomplish this by creating a promise chain.
// const promise=doSomething();
// const promise2=promise.then(successCallback,failureCallback);

//Understand from here
//see basically promises are used to either do one of these things:-
// 1)resolve
// 2)reject
// 3)pending

//let say this function can either fullfill the service or reject it

function fun1(){
  return new Promise(function(resolve,reject){
    setTimeout(() => {
      const error=true;
      if(!error){
        console.log('Your promise is resolved');
        resolve();
      }
      else{
        console.log("Promise rejected");
        reject() ;
      }
    }, 2000);
  })
}
fun1().then(function(){
  console.log("Me:Thanks for resolving");
}).catch(function(){
  console.log("Me:Bad bro");
})

//lets take the same faculty example and do it with promises.
const faculties2=[{
  name:"MLR",
  Subject:"ML",
},{
  name:"Martin Parmar",
  Subject:"AI",
}];
//above is array

function enrollFaculty2(faculty){
  return new Promise(function(resolve,reject){
    setTimeout(() => {
      if(faculties2.push(faculty)){
        console.log('faculty is enrolled');
        resolve();
        }
        else{
            console.log('faculty is not enrolled');
            reject();
        }
        }, 2000);
  });
}

function getFaculty2(){
  setTimeout(() => {
    console.log('Faculties are fetched');
    console.log(faculties2);
  }, 1000);
}

let newFaculty2 = {name:"Sneha Padhiar",Subject:"SE"};
enrollFaculty2(newFaculty2).then(function(){
  getFaculty2();
}).catch(function(){
  console.log('some error occured');
});
//in short the function inside "then" is run as "resolve"
//and functions outside "then" is run as "reject"

//chaining of promises

const f1=()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log("my name is MLR");
      resolve("martin parmar");
    }, 1000);
  })
}

f1().then((faculty)=>{
  console.log(`I am ${faculty}. and i am being called after f1 function`);

  const f2=(faculty3)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        console.log(`my name is ${faculty3}`);
        resolve(200);
      }, 2000);
    })
  }

  f2("sneha padhiar").then((value)=>{
    console.log("All done with Task. 200 OK");
  }).catch((value)=>{
    console.log("Not done with task. 404 Error");
  });
});


//another example of Promises
const loginUser=(email,password)=>{
  return new Promise((resolve,reject)=>{
      setTimeout(() => {
          console.log('Data from loginUser')
          resolve(
              {userEmail:email}
          );
      }, 3000);
  });
}

const getUserVideos=(email)=>{
  return new Promise((resolve,reject)=>{
      setTimeout(() => {
          resolve(["v1","v2","v3"]);
      }, 1000);
  });
}

const getUserVideosDetails=(video)=>{
  return new Promise((resolve,reject)=>{
      setTimeout(() => {
          resolve(["Name","singer","track"]);
      }, 1000);
  });
}

//here we are providing "object" means userEmail is an object that will be store in
//"user" that is an argument in function and it is an object that why we have written user.email
loginUser("test@example.com",123456).then((user)=>{
  getUserVideos(user.email);
}).then((videos)=>{
  getUserVideosDetails(videos[0]);
}).then((details)=>{
  console.log(details);
})

//anuj bhaiya Promises:-
const ticket=new Promise((resolve,reject)=>{
  const onBoarded=True;
  if(onBoarded){
    resolve("You have got the ticket.");//when we call resolve function and whatever we pass in 
    //this parameter will be send to "then" part i.e promise fullfill part
    //and when the promise is not fulfil then it goes to "catch" part means the parameter in reject will goes to catch part 
  }
  else{
    reject("You have not got the ticket.");
  }
})

ticket.then((data)=>{
  console.log("whoo!",data);
}).catch((data)=>{
  console.log("oh no!",data);
}).finally(()=>{
  console.log("I will always be executed");
})
//see this finally block will definetaly executed whether the promise has been resolved or not

//lets understand from "cheese example"
function getCheese(){
  return new Promise((resolve,reject)=>{
    console.log('getting cheese');//this is synchronous task
  })
}
console.log(getCheese());
//see now without doing asynchronous task i.e without using setTimeout,setTimeinterval functions
// our promise will be in fulfilled state.
// o/p:-
// Promise->{fulfilled:getting cheese}

//if we use the asynchronous functions like setTimeout /setTimeinterval then the promise will be in pending state 
//untill the resolve() or reject() function is called

//means like this
function getCheese(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      const cheese="🧀";//by pressing (ctrl+i)
      resolve(cheese);
    }, 2000);
  })
}
// console.log(getCheese());
//o/p:-
// Promise->{pending}
//getting cheese

function makeDough(cheese){
  return new Promise((resolve,reject)=>{
    setTimeout(()=> { 
     const dough=cheese+"🍩";
     resolve(dough); 
    },2000);
  })
}

function bakePizza(dough){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      const pizza=dough+"🍕";
      resolve(pizza);
    }, 2000);
  })
}

getCheese().then((cheese)=>{
  console.log("getting cheese!",cheese);
  return makeDough(cheese);
}).then((dough)=>{
  console.log("here is the dough",dough);
  return bakePizza(dough);
}).then((pizza)=>{
  console.log("here is the pizza",pizza);
}).catch((data)=>{
  console.log("error occured",data);
});
//see if we do not write "return" keyword before in this calling functions then instead of this dough and pizza , "undefinded" will be come.

//now this more becomes simple using async/await function

function getCheese(){
  setTimeout(() => {
    const cheese="🧀";
  }, 2000);
}

function makeDough(cheese){
  setTimeout(()=> { 
   const dough=cheese+"🍩";
  },2000);
}

function bakePizza(dough){
  setTimeout(() => {
    const pizza=dough+"🍕";
  }, 2000);
}

async function orderPizza(){
try {
const cheese=await getCheese();//see here untill the promise is returned it will not go the next line.also just remove that resolve,reject that we do not need.
console.log("here is the cheese");
const dough=await makeDough(cheese);
console.log("here is the dough");
const pizza=await bakePizza(dough);
console.log("here is the pizza");
} catch (error) {
console.log(error);
}
}

orderPizza();

//lets do this function using callback functions
function getCheese2(callback){
  setTimeout(() => {
    const cheese2="🧀";//by pressing (ctrl+i)
    console.log("here is the cheese");
    callback(cheese2);
  }, 2000);
}

getCheese2((cheese2)=>{
  console.log("got the cheese",cheese2);
})



function getCheese(callback){
  setTimeout(() => {
    const cheese="🧀";//by pressing (ctrl+i)
    console.log("here is the cheese");
    callback(cheese);
  }, 2000);
}

function makeDough(cheese,callback){
  setTimeout(()=> { 
   const dough=cheese+"🍩";
   callback(dough);
  },2000);
}


function bakePizza(dough,callback){
  setTimeout(() => {
    const pizza=dough+"🍕";
    callback(pizza);
  }, 2000);
}

getCheese((cheese)=>{
  makeDough(cheese,(dough)=>{
      console.log('here is the dough');
    bakePizza(dough,(pizza)=>{
      console.log(`Here we go ${pizza}`);
    });
  });
});


//async and await
//first see this normal function
function funcker() {
  console.log("Inside name function");
  return "awt";
}

console.log("before calling name function");
let a = funcker();
console.log("After calling name function");
console.log(a);
console.log("last line of code");
//output
// before calling name function
// Inside name function
// After calling name function
// awt
// last line of code 


//now if we apply async() keyword before the name() function then it returns promise means it will be first complete its task then only functions/statements after that will execute.

async function name1(){
  console.log("Inside name function");
  return "awt";
}

console.log("before calling name function");
let b=name1();
console.log("After calling name function");
console.log(b);
console.log("last line of code");
//output
// before calling name function
// Inside name function
// After calling name function
// Promise { 'awt' }
// last line of code

async function name2(){
  console.log("Inside name function");
  const response=await fetch('https://api.github.com/users');
  console.log('before response');
  const users=await response.json();
  console.log('users resolved');
  return users;
  // return "awt";
}

console.log("before calling name function");
let c=name2();
console.log("After calling name function");
console.log(c);
c.then((data)=>{
  console.log(data);
})
console.log("last line of code");
//see here there are total 3 promises in name2() function
//now here happens that first "before calling name function" will be execute
//then it will call name2() function then inside that "inside name function" will be print.
//now after that there is one promise so it will say that it will take time to execute so in meanwhile execute other statements.
//so it will print "After calling name function"
//then again it will check whether the promise has been completed or not
//if not the promise will be printed.
//now again it will check and yes now it will completed so "Before response" will be printed.
//now again after that next promise is there so it will take time to execute meanwhile other statements will be execute but it is the last function only so just convert into json() form and execute and at last the users will be return.

//in short if we make function async() then it returns promise that it will execute itself after some work.
//and whenever it encounters "await" it will again return promise from that and executes rest of the functions/statements.

//Understand async/await simply from here
function resolvedafter2Seconds(){
  setTimeout(() => {
    return new Promise((resolve)=>{
      resolve('resolved');
    })
  }, 2000);
}

async function asyncCall(){
  console.log("Calling");
  const result=await resolvedafter2Seconds();
  console.log(result);
}

asyncCall();

// We use async to return a promise.
// We use await to wait and handle a promise.


//Lets understand the concept of Fetch Api
//lets say there is one html file in which there are two buttons . clicking on any one button will fetch the data from the particular file.

//so its js code will be like these
let myBtn = document.getElementById("myBtn");

let content = document.getElementById("content");

function getData(){
  console.log("Started getData")
  url="awt1.txt";
  fetch(url).then((response)=>{
    console.log("Inside first then")
    return response.text();
  }).then((data)=>{
    console.log("Inside second then")
    console.log(data);
  })
}

console.log("before running getData")
getData();
console.log("After running getData")
//o/p
//Before running getData
//after running getData
//inside first then
//inside second then
//the things return in that "awt.txt" file

//see this happen because "fetch" is a async process that will run in background . that's why the "after running getData" run first then the things return in the file executed after it.

//lets say if we want to fetch the github users then just change the url
function getData(){
  console.log("Started getData")
  url="https://api.github.com/users";
  fetch(url).then((response)=>{
    console.log("Inside first then")
    return response.json();
  }).then((data)=>{
    console.log("Inside second then")
    console.log(data);
  })
}

console.log("before running getData")
getData();
console.log("After running getData")

//search for api.github.com/users
//also we change the response.text() to response.json() because it does parse the data i.e we will get data in form of Object form . otherwise we will get the data in Plain text form  

//the above we see is for "get request for data".Now we will see for "Post request for data".

function postData(){
  url="https://dummy.restapiexample.com/api/v1/create";
  data='{"name":"harry46","salary":"123","age":"23"}'
  params={
    method:'post',
    headers:{
      'Content-Type':'application/json'
    },
    // body: JSON.stringify(data);//we need to convert the data in string as by default it will be object but data we have to pass should be in string form
    body: data//see here in our case the data is already in string form.so no need to use JSON.stringify() method
  }
  fetch(url,params).then(response=>response.json())
  .then(data=>console.log(data) )
}
//see if there is only one parameter in case of arrow functions then no need to put the curly braces

//now just search for "fake post request api"

//lets understand the Object Literal for creating objects
let car={
  name:'Maruti 800',
  topSpeed:89,
  run:function (){
    console.log("car is running");
  }
}
//above is for only one car. if we want to make thousand of cars then we cannot use this, So we have to use constructors.

function generalCar(carName,carSpeed){
  this.name=carName; //here 'this' refers to the object itself and not any other variable or function
  this.topSpeed=carSpeed;
  this.run=function(){
    console.log(`${this.name} is running`);
  }
}

let car1=new generalCar('Mustang',200);
console.log(car1);
console.log(car1.run());

//Object Prototype
let intro={
  name:'sujal',
  id:'21ce046',
  subject:'awt'
}
console.log(intro); //now see on browser. do inspect and there we will see all the details about this "intro" object. in that "_proto_:" will be like something written and that's the object prototype.

//when we created an object with the help of object literal then Object Prototype was already provided to us. 

//now lets say if we have created an object using constructor then:-

function obj46(personName,personId,personSub){
  this.name=personName;
  this.id=personId;
  this.Sub=personSub;
}
let ob2=new obj46('MLR','21ce064','awt');
console.log(ob2);
//now when we see in browser under inspect then under '_proto_' then we can see that the 'ob2's prototype' start from this 'obj46 prototype'

//in simple words prototype means from which prototype we have made/create the object. 
//when we create the object using object literal like 'let obj={}' then by default the js provides the prototype for given obj as 'Object.prototype'

//MOST IMPP:- We cannot change the prototype of the object that is created by object literal. It can be only change if the object is created using constructor. So never change the prototype of object that is global object and from that object other objects are inherited/ created.

ob2.prototype.getName=function(){
  return this.name;
}

ob2.prototype.setName=function(newName){
  this.name=newName;
}
//see means that we have added one "setName" function in prototype of object2 that sets the name to "newName".

//Now there are many functions in prototype that we can see in browser under inspect under "prototype". there if we expand then there will be multiple functions. Also we can add our own function in that also but no for object which are created thorugh object literal.

// The prototype of an object is not always Object.prototype. This is only for the objects created through object literal. Not for those who are created throught the constructors.

//To know the prototype of any object function used is:-
obj.__proto__ //to get the __proto__ of a particular object
//or
Object.getPrototypeOf(obj);  //this will give you the same result as above but in one line code.

console.log(intro.__proto__);//will give you the prototype.
//or 
console.log(Object.getPrototypeOf(intro));

//Object.create() method
// The Object.create() method creates a new object and allows you to specify an object that will be used as the new object's prototype.

const personPrototype={
  sayHi: () => {
    console.log("Hii");
  }
}

const p1=Object.create(personPrototype);
p1.sayHi();

// use Object.create() to create a new object with personPrototype as its prototype


//Object Prototypes Inheritance
// first see this normal code 
const personProto={
  firstName:"Radhe",
  LastName:"Mohan",
  changeName:(givenName)=>{
    this.name=givenName;
  }
}

const person1=Object.create(personProto);
person1.company="Acite";

//now see this code 
const person46=Object.create(personProto,{
  name:{value:"sujal"},
  role:{value:"Programmer"},
})
//Now if we change the name of this person1 lets say by the function changeName() which is in personProto then it will not change.
person46.changeName("Radhe Radhe");//it will not change

//so we have to basically see the ES6 classes but see this by writing this keyword it will change
const person2=Object.create(personProto,{
  name:{value:"sujal",writable:true},
  role:{value:"Programmer"},
})
person2.changeName("Rohan");//now it will be change


//see this harry's new prototypes and __proto__
let haryobj={
  name2:"Harry",
  language:"js"
}
console.log(haryobj);//see "inspect" in browser

let pharyobj={
  run:()=>{
    alert("run");
  }
}
//now if we do haryobj.run() then it will give error as there is no such type of function in its prototype
// but if we change the prototype of this 'haryobj' equal to 'pharyobj' then it will be okk
haryobj.__proto__ = pharyobj;// now when i write haryobj.run(),then it will work fine because here hary
haryobj.run();

//if there was already an run() method in haryobj then it will run that function/method only. it will go to its prototype for checking whether the method is there or not only when there is not such method in its prototype and we call it

//Now there is also an prototype of prototype
pharyobj.__proto__={
  name:"jackie"
}
console.log(haryobj.name);
//o/p:- jackie 
//basically it happen like this that it gone to haryobj to find "name" but there is name2 so it then gone to find in its "protoype"
//and prototype of haryobj is pharyobj and also in that it didn't find it so then it gone to check in the prototype of 
//pharyobj and there it find it so it will print
//this way the chaining happens.




//Now lets see inheritance
//Employee constructor
function Employee(name,exp){
  this.name=name;
  this.exp=exp;
}

//lets say if we want to add the some function in the prototype of Employee then we can do like these as we have done above also
Employee.prototype.slogan=function(){
   return `this company is best.Regards ${this.name}`;
}
//see here when we want to use 'this' keyword then always use function functionname() instead of arrow functions because it will give error

let c1=new Employee("sujal",5);
console.log(c1.slogan());

//Programmer constructor
function Programmer(name,exp,lan){ 
  Employee.call(this,name,exp);
  this.lan=lan;
}

//see when we write the amit.slogan() it will give error as its prototype is not equal to the prototype of Employee
//inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);
//here Object is to be created from the prototype of the Employee as the above line say these

//manually set the constructor as it does not shows the constructor for programmer 
Programmer.prototype.constructor = Programmer;//here we are setting the constructor of programmer class as programer and now when we call new programmer then

let amit=new Programmer("amit",10,"Js");
console.log(amit);

//ES6 classes
class Developer{
  constructor(givenName,givenExp,giveSal){
    this.name=givenName;
    this.exp=givenExp;
    this.sal=giveSal;
  }

  slogan=()=>{
    return `this company is best.Regards ${this.name}`;
 }

 joiningyear=()=>{
  let year=(new Date()).getFullYear(); //get current date and time in yr format
 }

 //if we want that we want to use any function without creating the object of class then use "static" keyword
 static add(a,b){
  return a+b;
 }
  
}

let s1=new Developer("Sujal",10,"6 lakhs");
console.log(s1.slogan());
console.log(s1.joiningyear());

//calling static things(variable,function,etc) without creating the object of Developer class. We can directly call with the name of Class
console.log(Developer.add(10,20));//30

//now if we want to inherit the class Developer then
//use 'extend' keyword
class Tester extends Developer{
  constructor(givenName,givenExp,giveSal,lan){
    super (givenName , givenExp , giveSal );  ///to call parent's contructor 'super' is used
    this.lan=lan;
  }

  static multiply(a,b){
    return a*b;
  }
}

s2=new Tester("rohit",2,"2 lakhs","ML")
console.log(s2);
console.log(Tester.multiply(3,2));