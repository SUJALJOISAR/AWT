// The "use strict" directive enables JavaScript’s strict mode.

// JavaScript’s strict mode was introduced in ECMAScript 5. It enforces stricter parsing and error handling on the code at runtime. It also helps you write cleaner code and catch errors and bugs that might otherwise go unnoticed.

// "use strict";
// a=10;
// console.log(a);
//here the error will come :- ReferenceError: a is not defined

// "use strict";
// var a=10;
// console.log(a);//here the error will not come

//assignment 1 
//check in which version from 14 to 16 these "use strict" is not used .

//use strict means strictly syntax sathe badhu function and varaibles use karvana
//means use strict use kari ane aa first rite declare kari without using "let" or "var" keyword then error will generated

// You can enable strict mode in two different ways, globally and locally.
// Enable strict mode globally by adding the string "use strict" as the first statement in your file. All subsequent code in the script will execute in strict mode.

//like this

// First line inside a .js file
// 'use strict';
// rest of the script

// a=10;
// "use strict";
// console.log(a);//here also no error will come

// Enable strict mode locally by adding the string "use strict" as the first statement inside a function. Using strict mode locally inside the function will enforce stricter parsing only within the context of that function.

// Inside a function

// function strict_function() {
//     'use strict'; // rest of the function
//     var a=20;
//     console.log(a);
//   }
//   strict_function();

// function add(a,b,b)
// {
//     return a+b+b;
// }
// console.log(add(10,20,30));//no error will come


// function add(a,b,b)
// {
//     "use strict";
//     return a+b+b;
// }
// console.log(add(10,20,30));//SyntaxError: Duplicate parameter name not allowed in this context


//assignment-2
// mdn js "use strict tutorial"

//without using "use strict" if we pass two arguments but in main function if there is like this function fun_name(a,b,b) then it will work 
//but with using "use strict" error will generate for duplicate variable


//always use "use strict" to avoid error and fix bugs easily.

//mdn Reference


// Whole-script strict mode syntax
// "use strict";
// const v = "Hi! I'm a strict mode script!";


//Using Strict in nested functions
// to invoke strict mode for a function, put the exact statement "use strict"; (or 'use strict';) in the function's body before any other statements.
function myfun(){
    //functional level strict mode syntax
    "use strict";

    function nested(){
        return "And so am I!";
    }

    return `Hi I'am a strict mode function! ${nested()}`;
}

function mynotstrictfunction(){
    return 'I am not strict';
}
//See for function we have to  write 'use strict' inside the function body i.e it should be the first statement inside the body



// The "use strict" directive can only be applied to the body of functions with simple parameters. Using "use strict" in functions with rest, default, or destructured parameters is a syntax error.

//means if we apply default parameters and use 'use strict' then it will give error
// function sum(a=10,b=2){
//     // SyntaxError: "use strict" not allowed in function with default parameter
//     'use strict';
//     return a+b;
// }

// The entire contents of JavaScript modules are automatically in strict mode, with no statement needed to initiate it.
//means appde je pan modules banavi chi node js savthi pehla using 'npm init' ae badha by default strict mode ni andar j hase

// function myStrictFunction() {
//     // because this is a module, I'm strict by default
//   }
//   export default myStrictFunction;



  