function Person(name,age){
    this.name=name;
    this.age=age;
}

console.log(Person.__proto__);
//or 
// console.log(Object.getPrototypeOf(Person));

Person.prototype.greet=function(){
    console.log( `Hi! My name is ${this.name} and i am ${this.age} year old`);
}

var p1=new Person("Sujal",20);
p1.greet();

// The issue you're facing with undefined values in your greet method is due to the use of an arrow function (()=>{}) for the method. Arrow functions do not have their
//  own 'this' context, so they cannot access the 'this' properties of the instance (in this case, this.name and this.age).

//now lets see about Array constructor according to question
// Define a custom method for the Array prototype
Array.prototype.customMethod = function() {
    console.log('Hi, I am customMethod inside the Array constructor');
    for (let i = 0; i < this.length; i++) {
        console.log(this[i]);
    }
};

var myArr = [1, 2, 3, 4];
myArr.customMethod();
//here also do not use arrow functions beacause 'this' keyword in not use in that.