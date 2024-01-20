console.log([]==[]);  //false

console.log( {}=={} );  //false


// {} ==={} ,
// []===[] 

//******************  unary function */
const unaryFunction = (a) => console.log(a + 10);

console.log(unaryFunction);  //[Function: unaryFunction]

///////////////////////*********   currying function      */

const curryUnaryFunction = (a) => (b) => (c) => a + b + c;

console.log(curryUnaryFunction(1));
console.log(curryUnaryFunction(1)(2));
console.log(curryUnaryFunction(1)(2)(3));


////////////////****************              */

let counter = 30;
if (counter === 30) {
  let counter = 31;
  console.log(counter); // 31
}
console.log(counter); //30

///////////////***************       */

// let counter = 1;
// switch (x) {
//   case 0:
//     let name;
//     break;
// }
//   case 1:{
//     let name; // SyntaxError for redeclaration.
//     break;
// }

// let count = 1;
// switch (x) {
//   case 0: {
//     let name;
//     break;
//   }
//   case 1: {
//     let name; // No SyntaxError for redeclaration.
//     break;
//   }
// }

// **************************memoization ********

const memoizAddition = () => {
    let cache = {};
    return (value) => {
      if (value in cache) {
        console.log("Fetching from cache");
        return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
      } else {
        console.log("Calculating result");
        let result = value + 20;
        cache[value] = result;
        return result;
      }
    };
  };
    // returned function from memoizAddition
    //   console.time();
    //   console.timeEnd();
    const addition = memoizAddition();
    console.log(addition(20)); //output: 40 calculated
    console.log(addition(20)); //output: 40 
  

//   ***********************************************

