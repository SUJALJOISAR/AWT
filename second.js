//use of var and let and const keyword
var x=1;
if(x === 1){
    var x=2;//here the value gets updated
    console.log(x);//2
}

console.log(x);//2

//var if written at first line of file it is globally accessible
//it can be used anywhere in the code
//if written  inside function then it is  accessible only at function level.

var x=1;
if(x === 1){
    let x=2;
    console.log(x);//2
}

console.log(x);//1
//see let is used at block level only means the code written inside curly braces.
//so always use let keyword instead of var

function foo(){
    var x=1;
    function bar(){
        var y=2;
        console.log(x);//1 
        console.log(y);//2
    } 
    bar();
    console.log(x);//1
    console.log(y);//reference error:y is not defined at scope
}

foo();

// see ""===" will compare and also compare data types while "==" only compares variable not data types