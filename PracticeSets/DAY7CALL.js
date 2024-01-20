var name = {first: "ram" , lastName: "prasad"} ;
var city = {first:"kanpur"};

function invokes (any1, any2) {
    console.log(any1 + " " + this.first + " " + this.lastName+ " " +any2);
}


// Call: The call() method invokes a function with a given this value and arguments provided one by one

// invokes.call(name,"helo","bye")          //helo ram prasad bye
// invokes.call(city,"tata" )              //tata kanpur undefined undefined

// Apply: Invokes the function with a given this value and allows you to pass in arguments as an array

// invokes.apply(name, ["ka hua", "bhak bhutni ke"]);     //ka hua ram prasad bhak bhutni ke

// Bind: returns a new function, allowing you to pass any number of arguments

// invokes.bind(name, "firstNAAM" , "WAHHH" )//worng methold

let result = invokes.bind(name);
result("wah ka bat" , "haiiiiiii")


// Call and Apply are pretty much interchangeable. Both execute the current function
//  immediately. You need to decide whether it’s easier to send in an array or a
//  comma separated list of arguments. You can remember by treating Call is for comma 
//  (separated list) and Apply is for Array.

// Bind creates a new function that will have this set to the first parameter 
// passed to bind().