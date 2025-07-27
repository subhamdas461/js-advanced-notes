console.log("Start");

Promise.resolve().then(()=> {
    console.log("Resolve 😊")
    Promise.resolve().then(()=> {
    
    Promise.resolve().then(()=> {
    
    Promise.resolve().then(()=> {
    
    Promise.resolve().then(()=> {
    
    
})
})
})
})
})

setTimeout(()=> console.log("Settimeout 1000")
,1000)
setTimeout(()=> console.log("Settimeout 0 1")
,0)
setTimeout(()=> console.log("Settimeout 0 2")
,0)

for(let i=0;i<1000000000;i++){
    let b;
    if(i == 1000000000-1) console.log("Done loop");
    
}



console.log("End");
