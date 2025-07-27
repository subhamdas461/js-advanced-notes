const defaultText = document.querySelector(".default")
const debounceText = document.querySelector(".debounce")
const throttleText = document.querySelector(".throttle")

const inputField = document.querySelector("input")


// debounce a function to run after a pause from user
const debounce = (fn, delay) => {
    let timer;
    console.log(timer);
    return (...args)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>fn(...args), delay)
    }
}
const updateDebounceText = function(text){
    debounceText.innerHTML = text;
}


// Throttle a function to run after every interval from user
const superDebounceFunction = debounce(updateDebounceText, 300)

let count=0;

const throttle=(fn, delay)=>{
    let timeLimit = false
    return (...args)=>{
       if(!timeLimit){
        fn.apply(this,args);
        timeLimit = true
        setTimeout(()=>timeLimit = false, delay)
       }
    
    }
}
const updateThrottleText = (text) =>{
    throttleText.innerHTML = text;
}
const superThrottledFunc = throttle(updateThrottleText,1000)


document.addEventListener("keyup", (e)=>{
    
    count++;
    defaultText.innerHTML = e.target.value
    superDebounceFunction(e.target.value)
    superThrottledFunc(e.target.value)

})
