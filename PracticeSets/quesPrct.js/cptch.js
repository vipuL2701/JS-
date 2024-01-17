var rte =  function(){
    return 7;
}
console.log(typeof rte()); ////output NUMBER


function rtea(){
    return 7;
}
console.log(typeof rtea()); ////output NUMBER
 
//******************************************** */
// function rtes(){
//     return a;
// }
// console.log(typeof rtes()); ////Uncaught ReferenceError: a is not defined

// the above code is comment because when one code with error, after the code with error
// is not return. 
//********************************************* */
function rtexq(){
   return "";
}
console.log(typeof rtexq()); ////string


function rteasq(){
    return [];
}
console.log(typeof rteasq()); ////object


function rteq(){
    return 
}
console.log(typeof rteq()); ////undefined


function rteaaaaq(){
    return "   ";
}
console.log(typeof rteaaaaq()); ////string


function rtes(){
    return a;
}
console.log(typeof rtes()); ////Uncaught ReferenceError: a is not defined
