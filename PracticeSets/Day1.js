// console.log("2" === 2)
// console.log("2" == 2)
// const BigNumber= 12334566899n
// console.log(typeof BigNumber)

const myDate = new Date()
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())

// console.log(myDate.getMonth())
// console.log(Math.floor(Date.now()/1000))
// console.log(Date.now())

// console.log(`TOday IS ${myDate.getDay()} and time is ${myDate.getHours()} `)

// console.log(myDate.toLocaleString('Default',{
//     weekday : "narrow",
//     era: "narrow"
   
// }))
const random = Symbol("key")
const objt= {
   name: "Vipul",
   age: 29,
   city: "kanpur",
   random: "Uattar Pradesh"
}
// console.log(`the name of user is ${this.objt}`) //   worng

// console.log(objt.name)
// console.log(objt["age"])
// console.log(objt[random])
// console.log(typeof random)
// console.table(objt)

objt.greeting = function()
{
    console.log("hello baby");
}
// console.log(objt.greeting)
//  console.log(objt.greeting())

// objt.greeting = function() {
//     console.log(`helo user ${this.name}`)
// }

// console.log(objt.greeting())
// console.log(`helo user ${this.name}`)


