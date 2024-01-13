// GLobal scops , closures 

// function first(){
//     const name= "VipuL"
      
//     function second(){
//         const name1= "NigaM"
//         console.log("FIstName: ", name)
//     }
   // console.log("SecondName: ",name1)
   //***FOR PareNTS SCOPE CANNoT USE CHilD Scope data ******
    //second()
    
//}
//first()


//**HOSTING TYPS OF FUNCTIONS******

//typ1 
// function typ1(num){
//     return num +1
// }

// console.log(typ1(3))
// //***********************/
// console.log(typ1(4))

// function typ1(num){
//     return num + 1
// }
// //***********************/

// const typ3= function (num){
//     return num + 1
// }

// console.log(typ3(5))

// //**********************/
// console.log(typ4(6))   
// // IN THIS TYPE WE CAN NOT USE FUNCTION DECLARAtion before It

// const typ4 = function (num){
//     return num + 1
// }

//******************************** */

// const data= {
//     productName: "Dabur",
//     price: 900,

// productBuyAlert: function(){
//    // console.log(`The price of a product is ${this.price}`)
//    // console.log(`Your Product brand is ${this.productName}`)
//       //console.log(this)
//   }
// }
// data.productBuyAlert()
// console.log(this)// this goble scope contain empty object
// data.productName = "HIMALAYA"
// data.price = 499
// data.productBuyAlert()


//********this in function */

// function thisUse(){
//     console.log(this)
// }
// thisUse()

// function thisUse(){
//     const name = "VIP"
//     console.log(this.name); //undefine outpUT
// }

// thisUse()

// const thisUse = function (){
//     let name = "vIp"
//     console.log(this.name)   //undefine outpUT
// }

// thisUse()

// arrow function******************************

//  IIFE              ************************* 
//  () ();// syntax of IIFE
//name IIFE
(function iffe(){
    console.log(`DATA BASE CONNECTED`);
})();
//unname IIFE
(() => {
    console.log(`DB COnnecTED`)
    console.log("DB COnnecTED")
})();

//passing data USING IMMPLICIT RETURN using ARROW function
((name) => console.log(`DB IS CONNECTED BY ${name}`))("VIPUL");

//*************************** */

const name ={
    product: "himalya",
    price: 900,
}
 
