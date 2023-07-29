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


//Asynchronous programming
//Now Asynchronous programming allows multiple things to be execute at one time while synchronous programming does not.

//There are 3 way to acheive this:-
// 1)async/wait
// 2)promises
// 3)Callbacks

//basically asynchronous functions run in background. if the function is going to take 3ms to complete then it will not block other functions. it will let him to complete before that function execute. 

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

//see now here the faculty get enrolled in 3ms and it will be enrolled in background but the getFaculty function will execute when its timeout gets over i.e it will execute in 1ms .
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
      faculties2.push(faculty);
      console.log('Faculty has been enrolled');
      const error=false;
      if(!error){
        resolve();
      }
      else{
        reject();
      }
        }, 3000);
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

//async and await
//first see this normal function
function name(){
  console.log("Inside name function");
  return "awt";
}

console.log("before calling name function");
let a=name();
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










