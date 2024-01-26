//hasOwnProp

let arry = [1, 2, 3, 4, 5, 6, 7];

Array.prototype.extraProperty = "VIP";

// for (let v in arry){
//     console.log(v);
// }                                    // worng methold to show arry on only arry.

for (let v in arry) {
  if (arry.hasOwnProperty(v)) {
    console.log(v);
  }
} // right methold to show arry on only arry

//extra ****
console.log(arry.extraProperty);
console.log(typeof extraProperty); //undefined

//*************** Implement a custom forEach in javascript | JS Interviews */
let arry1 = [1, 2, 3, 4, 5, 6, 7];

Array.prototype.forEach = function (callback, thiscotext) {
  if (callback !== "funtion") {
    throw `Not a function`;
  }

  const lenght = this.length;

  for (leti = 0; i < lenght; i++) {
    if (this.hasOwnProperty()) {
      console.log(callback.call(thiscotext, this[i], this));
    }
  }
};
