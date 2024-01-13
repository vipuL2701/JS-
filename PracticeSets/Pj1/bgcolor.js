const buttons = document.querySelectorAll('.button');
//console.log(buttons)
const body = document.querySelector('body');
//console.log(body)

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        //console.log(e)
        //console.log(e.target);
        switch(e.target.id){
            case "sky-blue":
                body.style.backgroundColor = "skyblue";
                break;
            case "red":
                body.style.backgroundColor = "red";
                break;
            case "green":
                body.style.backgroundColor = "green";
                break;
            case "grey":
                body.style.backgroundColor = "grey";
                break;
            case "orange":
                body.style.backgroundColor = "orange";
                break;
            default :
                break;
        }
    })
})