let buttonPlayers = document.querySelectorAll(".main__funtion-btn")
const config = {
    timer : {
        hour: 0,
        minute: 5,
        second:30
    },
    btn1: 30,
    btn2: 90,
    btn: 330
}
const getTime = function(second){
    let remSec = Math.floor((config.timer.second+second)%60)
    let min = Math.floor((config.timer.second+second)/60)
    let reMin = min%60
    let hour = Math.floor(min/60)
    let remHour = hour%60;
   
    if(second > 0 && second < 60 ){
        config.timer.second + second > 60 ? 
        config.timer.second =  (config.timer.second + second)%60 :config.timer.second= config.timer.second + second;
    }
    if(second > 60 ){
        config.timer.second + remSec > 60 ? 
        config.timer.second =  (config.timer.second + remSec)%60 :config.timer.second= config.timer.second + remSec;
    }
    // min
    if(min > 0 && min < 60 ){
        console.log(min)
        config.timer.minute + min > 60 ? 
        config.timer.minute =  (config.timer.minute + min)%60 :config.timer.minute= config.timer.minute + min;
    }
    if(min > 60 ){
        config.timer.minute + reMin > 60 ? 
        config.timer.minute =  (config.timer.minute + reMin)%60 :config.timer.minute= config.timer.minute + reMin;
    }
    console.log(config)
}


buttonPlayers[0].addEventListener("click",()=>{
    getTime(90)
})

