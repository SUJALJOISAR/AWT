//iterators in js
// In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination.
// Specifically, an iterator is any object which implements the Iterator protocol by having a next() method that returns an object with two properties:

// value
// The next value in the iteration sequence.

// done
// This is true if the last value in the sequence has already been consumed. If value is present alongside done, it is the iterator's return value.

// Once created, an iterator object can be iterated explicitly by repeatedly calling next(). Iterating over an iterator is said to consume the iterator, because it is generally only possible to do once. After a terminating value has been yielded additional calls to next() should continue to return {done: true}.

// The most common iterator in JavaScript is the Array iterator, which returns each value in the associated array in sequence.
function fruitsIterator(array){//you can give any name instead of "array" in paramter of this iterator
    let nextIndex=0;
    //we will return an object
    return {//see this is the return value of function
        next:function(){
            if(nextIndex < array.length){
                //we will return below object
           return {
                value : array[nextIndex++],
                done : false
            }

            }
            else{
                //we will return below object with only done
                return {
                    done:true
                }
            }
        }
        }
    }


const myArray=['Apples','Grapes','Mango','Oranges'];
console.log("My array is:-",myArray);

//using the iterator
const fruits=fruitsIterator(myArray);
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());//done:true will be return 
//the above we got was all objects now we want only values inside it

console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);


//mdn example of iterators
// function makeRangeIterator(start=0,end=Infinity,step=1){
//   let nextIndex=start;
//   let iterationCount=0;

//   const rangeIterator={
//     next() {
//         let result;
//         if(nextIndex < end){
//             result={
//                 value:nextIndex,//this is a property name and its value is index number
//                 done:false
//             };
//             nextIndex+=step;
//             iterationCount++;
//             return result;
//         }
//         return {
//             value:iterationCount,
//             done: true
//         };
//     },
//   };
//   return rangeIterator;
// }

function makeRangeIterator(start = 0, end = Infinity) {
    let nextIndex = start;
    let IterationCount = 0;
  
    return {
      next: function () {
        if (nextIndex <= end) {
          IterationCount++; // Increment IterationCount before returning
          return {
            value: nextIndex++,
            done: false,
          };
        } else {
          return {
            done: true,
          };
        }
      },
      getIterationCount: function () {
        return IterationCount;
      },
    };
  }
  
  const it = makeRangeIterator(1, 10); // Set end to 10
  let result = it.next(); // Store the result of the first call
  while (result.done!=true) {//or (!result.done)
    console.log(result.value);
    result = it.next(); // Store the result of the next call
  }
  
  console.log("Iteration Count:", it.getIterationCount());

  //generators in js
  //mostly used when we want to generate any nos at time we need.
  //see in arrays if i store 1 to 100 then it will be inside our memory and that is of no use once the work is done
  //that why generators are used because they will only generate nos if we want .
  
  //syntax:- function* generatorName

  function* makeRangeGenerator(start=0,end=Infinity){
    let iterationCount1=0;
    for(let i=start;i<=end;i++)
    {
        iterationCount1++;
        yield i;
    }
    return iterationCount1;
  }

  const gen=makeRangeGenerator(1,10);
  for(const value of gen){
    console.log(value);
  }

const result1=gen.next();
if (result1.done==true) {
    console.log("Iteration Count:", result1.value);
  }

  //lets do according to question

  //creating an iterator for an infinite sequence
  function* createInfiniteSequenceIterator() {
    let nextIndex=1;
    while(true){
        yield nextIndex++;
    }
  }

  //creating an generator that yields even nos from above iterator
  function *evenNumberGenerator(){
    const iterator=createInfiniteSequenceIterator();
    while(true){
        const num=iterator.next().value;
        if(num%2==0){
            yield num;
        }
    }
  }

  //using both in differenct scenarios
  const iterator1=createInfiniteSequenceIterator();
  console.log("first 10 nos:-");
  for(let i=1;i<=10;i++)
  {
    console.log(iterator1.next().value);
  }

  const evennum=evenNumberGenerator();
  console.log("first 10 even nos:-");
  for(let i=1;i<=10;i++)
  {
    console.log(evennum.next().value);
  }
  
  