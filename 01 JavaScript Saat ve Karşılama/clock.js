let userName = prompt("Please Enter Your Name","Example : Fatih");
document.querySelector("#myName").innerHTML = userName;
let looper = () => {
    let date = new Date();
    let hour = date.getHours().toString();
    let minutes = date.getMinutes().toString();
    let seconds = date.getSeconds().toString();
    let day = date.getDay();
    
    switch (day) {
        case 0:
            day = "Pazar";
            break;
        case 1:
            day = "Pazartesi";
        break;
        case 2:
            day = "Salı";
        break;
        case 3:
            day = "Çarşamba";
        break;
        case 4:
        day = "Perşembe";
        break;
        case 5:
        day = "Cuma";
        break;
        case 6:
        day = "Cumartesi";
        break;
        default:
            break;
    } 
    
    
    if(hour.lenght == 1){
        hour = "0" + `${hour}`;
    }
    if(minutes.lenght == 1){
        minutes ="0" + `${minutes}`;
    }
    if(seconds.length == 1){
        seconds = "0" + `${seconds}`;
    }
    
    
    
    document.querySelector(".clock").innerHTML = `${hour} ${minutes} ${seconds} ${day}`;
    
}
setInterval(looper,200)