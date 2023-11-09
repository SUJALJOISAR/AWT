'use strict';

// prac-1
let str="awt"
let b='true'
let a=10

console.log(str);
console.log(b);
console.log(a);

const sum=(a,b)=>{
    return a+b;
}

let x=10
let y=20
console.log(`the sum of two numbers is ${sum(10,20)}`);

// What is the output of following JavaScript code?
for (var i = 0; i < 10; i=i+2) {
setTimeout(() => console.log(i), 1);
}
for (let i = 0; i < 10; i=i+2) {
setTimeout(() => console.log(i), 1);
}

// For the first loop (using var):
10
10
10
10
10
// For the second loop (using let):
0
2
4
6
8

// In the provided JavaScript code, there are two loops. The first loop uses the var keyword to declare the variable i, and the second loop uses the let keyword to declare the variable i.
// First Loop (Using var):
// In this loop, the variable i is declared using var, which has function-level scope. The console.log(i) statements are inside a 
// setTimeout function, which is asynchronous. The loop runs quickly and increments i by 2 in each iteration. However, 
// the console.log(i) inside the setTimeout runs after the loop has completed. So, when the console.log(i) inside the setTimeout 
// executes, it prints the value of i at the end of the loop, which is 10. This is because the loop completes, and i becomes 10 
// before any of the console.log statements are executed. As a result, you see '10' printed five times.
// Second Loop (Using let):
// In this loop, the variable i is declared using let, which has block-level scope. With let, a new i is created in each iteration of
//  the loop. Each console.log(i) inside the setTimeout refers to a separate i for each iteration. Since i is defined within the 
// block scope of the loop, it retains its value for the duration of the setTimeout. As a result, you get the expected output,
//  where '0', '2', '4', '6', and '8' are printed in the second loop because each console.log references the i specific to its 
// respective iteration.
// In summary, the key difference is in how variable scoping works with var (function-level scope) and let (block-level scope).
//  When you use var, the same i variable is shared across all iterations and reflects its final value (10). When you use let, 
// each iteration creates a new i, allowing you to capture and print the values as they change in each iteration.






