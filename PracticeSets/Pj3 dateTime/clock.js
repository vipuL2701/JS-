const clock = document.querySelector('#clock')
const dat = document.querySelector('#dat')
// const clock = document.querySelector('#clock')
// console.log(clock);

setInterval(function (){
    let date = new Date();
    let time = new Date();
    // console.log(date.toLocaleTimeString());
        const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
    clock.innerHTML = date.toLocaleTimeString();
    dat.innerHTML = time.toLocaleDateString("en-IN", options);
}, 1000)