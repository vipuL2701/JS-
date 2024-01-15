function randomNo(){
    const hex = "0123456789ABCDE";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];  
    }
    return color;
}
console.log(randomNo());

let refID
const starChangeBg = function(){
 if (refID == null) {      /////this is use full for performance
    refID = setInterval(changeColor, 1000)
 }  
 function changeColor(){
        document.body.style.backgroundColor = randomNo();
    }
}

const stopChangeBg = function(){
     clearInterval(refID);
     refID = null;  // for performance 
}          
document.querySelector('#start').addEventListener('click', starChangeBg);
document.querySelector('#stop').addEventListener('click', stopChangeBg);