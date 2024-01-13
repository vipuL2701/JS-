//objects keys and their values

const users= [
    {
        id: 1,
        email: "vipul@gmail.com"
    },
    {
        id: 6,
        email: "v@gmail.com"
    },
    {
        id: 5,
        email: "vi@gmail.com"
    },
    {
        id: 4,
        email: "vip@gmail.com"
    },
    {
        id: 3,
        email: "vipu@gmail.com"
    }
]
// console.log(users[0].id)
// console.log(users[2].email)

// console.log(Object.keys(users))
// console.log(Object.values(users))
// console.log(Object.entries(users))

// console.log(users.hasOwnProperty('vipul'))
// console.log(users.hasOwnProperty('id: 4'))

// objects destructuring

const product= {
    name: "Shampoo",
    price: "499",
    brand: "Himami",
    countryOfOrigin: "India"
}

// const {countryOfOrigin:org}= product

// console.log(org)

// functions

function myTesting(num1, num2){
    if ((num1,num2)!==Number) {
        console.log("Please give correct number")
        
    }
    return num1 + num2
}
// const result=myTesting(2, "a")
// console.log(result)
// myTesting(2, "3")

// function user(name){
//     return `${name} just logged in`
// }
// user("VipuL")//does not print any things.

// console.log(user("Vipul"))

// function user2(name ="welcome user")
// {
//     return `${name} just logged in`
// }
// console.log(user2("vipuL")) 
// console.log(user2()) 
// console.log(user2("")) 



//spred opr

// const array1 =[ 1,1,2,3,4,5]
// const array2 =[ 9,8,7,6,5,4,3]

// console.log([...array1,...array2])

//rest oper

// function restopr(...num){
//     return num
// } 
// console.log(restopr(0,1,2,30,40,50,600,700,800))

// function restopr(val1,val2,...num){
//     return `value is ${val1} and the rest part is ${num}`
// }
// console.log(restopr(1,22,333,4444))

// object pass in function

const obj= {
    name: "VIPUL",
    contactNo: "234-8992-011",
    city: "kanpur",
    yearlyearings: "10LPA"
}
function objPassFunc(anyobj){
    console.log(anyobj.name)
    console.log(anyobj.yearlyearings)
}
// objPassFunc(obj)

//anthor method *************

// objPassFunc({
//     name:"Ram",
//     city: "DELHI",
//     yearlyearings: "5LPA"
// })

//Passing ARRAY in FUnction
const arrayRandom= [11,222,3333,4444]

function randomArr(pass){
    return pass[3]
}
// console.log(randomArr(arrayRandom))


