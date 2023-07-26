'use strict';
//let keyword
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
  const Rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  
  // Expression; the class has its own name
  const Rectangle = class Rectangle2 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  