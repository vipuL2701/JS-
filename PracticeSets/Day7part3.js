// function goBack() {
//     window.history.back();
//   }
//   function goForward() {
//     window.history.forward();
//   }
// console.log(goBack());
// console.log(goForward());



// all output true ***************************

// console.log(isFinite(100));
// console.log(isFinite(1));
// console.log(isFinite(-1));
// console.log(isFinite(""));
// console.log(isFinite([]));


// console.log(isFinite({}));                     // false
// // console.log(isFinite(a));                   //ReferenceError: a is not defined
// console.log(isFinite(Infinity));                            // false
// console.log(isFinite(NaN));                                 // false
// console.log(isFinite(-Infinity));                           // false


///////////////////////

// let arr1 = [1,2,3,4,5,6,7];

// let arr = arr1.slice(2,6);
// console.log(arr);          //[ 3, 4, 5, 6 ]
// console.log(arr1);

// let aar2 = [10,2,33,44,55,66];

// console.log(aar2.slice(1,3))   //[2,33]

let arr3 =[2,5,5,6,6,666,9,8,55,22,11]

console.log(arr3.splice(3,4))      //[ 6, 6, 666, 9 ]

let arr4 =[2,5,5,6,6,666,9,8,55,22,11]
console.log(arr4.slice(3));        //[6,  6, 666,  9, 8, 55,  22, 11]


//HIGHER ORDER FUNCTION *******************************
//example.
const firstOrderFunc = () =>
  console.log("Hello, I am a First order function");
const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
higherOrder(firstOrderFunc);