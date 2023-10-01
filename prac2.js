'use strict';
//prac-2
var arr=[1,2,3,4];
console.log(arr.length);
for (let i = 0;i<4 ; i++) {
    console.log(arr[i]);
}
arr.push(10);
console.log(arr);

var arr2=["awt",true,46,{
    "name":"sujal",
    "id":"21ce046"
}]
arr2.push("js tut");
console.log(arr2)
console.log(arr2[3])

arr2.pop();
console.log(arr2);

arr2.shift()
console.log(arr2);

arr2.unshift("mlr")
console.log(arr2);

arr2.push("awt");
console.log(arr2);

console.log(arr2.join('-'));

const Student = {
    first: 'Sujal',
    last: 'Joisar'
  };
  
  console.log(Student.first);
  //sujal
  delete Student.first;
  console.log(Student.first);
  // undefined

  var arr3=["nodejs","reactjs","cloud"]
  arr3=arr3.concat(arr2);
  console.log(arr3);
  arr3=arr3.concat('',arr2);
  console.log(arr3);

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// Expected output: "Hello World"

console.log(str2.concat(', ', str1));
// Expected output: "World, Hello"
  
const months =['jan','march','april','june'];
months.splice(1,0,'feb');
console.log(months);
//syntax
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item0)
// splice(start, deleteCount, item0, item1)
// splice(start, deleteCount, item0, item1, /* …, */ itemN)

// An integer indicating the number of elements in the array to remove from start.

months.splice(3,1,'dec');
console.log(months);

months.splice(3,2,'july','nov');
console.log(months);//first parameter means kya index upar rakhvanu che, pachi second parameter means ae index pachi thi ketla delete karvana che ane third ane pachi badha paramters ma items lakhvanu kahe che jeh tyathi add thase 

const tech=["nodejs","reactjs","c++","c","java","cloud"];
console.log(tech.slice(2));
console.log(tech.slice(0,2));//(start , end-1)

console.log(tech.slice(-2));//prints from end
console.log(tech.slice(-3));//prints from end

console.log(tech.slice(2,-1));
// slice()
// slice(start)
// slice(start, end)

// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// flat()
// flat(depth)
const a1=[0,1,2,3,[5,6]];
console.log(a1.flat());

const a2=[0,1,2,[[3,4]]];
console.log(a2.flat(2));
console.log(a2.flat(1));


const stu={
    name:"SUJAL JOISAR",
    ID:"21CE046",
    dept:"CE",
    age:19,
    tech:["html","css","js"]
}
console.log(stu);
console.log(stu.name);
console.log(stu.tech);