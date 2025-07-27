// const promOne = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Done after 2 sec")
//         resolve([{},{}])
//     },1000);
//     // resolve("done")
//     // reject("OK")
// })
// console.log("Hello 1")
// const prom2 = new Promise((resolve,reject)=>{
//     const error = false
//     if(!error){
//             setTimeout(()=>{
//             console.log("Done after 2 sec prom 2")
//             resolve({})
//         },1000);
//     }else{
//         reject("Error found")
//     }
    
// })

// promOne.then((data)=>{
//     console.log(data);
// })

// const check = async ()=>{
//     try {
//         const res = await prom2;
//         console.log(res);
//     } catch (error) {
//         console.log("gotcha",error);
//     }
    
    
// }

// function wait(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function run() {
//   console.log("Start");
//   await wait(1000);
//   console.log("After 1 sec");
// }

// run();

// check()
// // promOne.catch(()=>console.log("Rejected"))

// // fetch("https://jsonplaceholder.typicode.com/posts")
// // .then(data=> data.json())
// // .then(data=> console.log(data)
// // )

// Promise.resolve().then(()=>console.log("Hello"))



/**
 * Promise constructor functions (static): all, allSettled, any, race etc.
 * 
 * Promise.resolve(value):
 * Creates a resolved Promise
 * 
 */
//Real Word use case
function getConfig() {
  // config might be fetched or instantly returned
  return window.localStorage.getItem('config')
    ? Promise.resolve(JSON.parse(localStorage.getItem('config')))
    : fetch('/config.json').then(res => res.json());
}

getConfig().then(config => initializeApp(config));



/**
 * 
 * Promise.reject(error):
 * Creates a rejected Promise
 */
function validateInput(data) {
  if (!data.username) {
    return Promise.reject("Username is required");
  }
  return Promise.resolve(data);
}

validateInput({})
  .catch(err => showToast(err)); // "Username is required"


/**
 * 
 * Promise.all(iterable):
 * 
 * Waits for all Promises to resolve or any to reject. If one is rejected 
 * it throws error else return array of iterable with resolved data
 * 
 * Fails fast: rejects if any promise rejects
 * 
 */
// const p1  = new Promise((res,rej)=>{
//     let isError = false
//     setTimeout(()=>{
//         if(isError) rej({error:"Error in P1"})
//         res({data: "Data from P1"})
//     }, 4000)
// })

// const p2  = new Promise((res,rej)=>{
//     let isError = true
//     setTimeout(()=>{
//         if(isError) rej({error:"Error in P2"})
//         res({data: "Data from P2"})
//     }, 1000)
// })

// const p3  = new Promise((res,rej)=>{
//     let isError = false
//     setTimeout(()=>{
//         if(isError) rej({error:"Error in P3"})
//         res({data: "Data from P3"})
//     }, 2000)
// })

// Promise.all([p1,p2,p3])
// .then((data)=>{console.log(data)})
// .catch(err=> console.error(err))
// .finally(()=>console.log("Fetched"))

//Real use case: Run multiple independent API calls in parallel
// Only continues when all succeed.
async function loadDashboard() {
  try {
    const [user, posts, notifications] = await Promise.all([
      fetch("/api/user").then(res => res.json()),
      fetch("/api/posts").then(res => res.json()),
      fetch("/api/notifications").then(res => res.json())
    ]);
    renderUI({ user, posts, notifications });
  } catch (err) {
    showError("Something failed while loading dashboard");
  }
}

/**
 * 
 * Promise.allSettled(iterable):
 * 
 * Waits for all Promises to complete (regardless of success/failure).
 * 
 * Return:
 *  [
        { status: "fulfilled", value: "ok" },
        { status: "rejected", reason: "fail" }
    ]
 * 
 */

// const p1  = new Promise((res,rej)=>{
//     let isError = false 
//     setTimeout(()=>{
//         if(isError) rej({error:"Error in P1"})
//         res({data: "Data from P1"})
//     }, 4000)
// })

// const p2  = new Promise((res,rej)=>{
//     let isError = true
//     setTimeout(()=>{
//         if(isError) rej({error:"Error in P2"})
//         res({data: "Data from P2"})
//     }, 1000)
// })

// const p3  = new Promise((res,rej)=>{
//     let isError = false
//     setTimeout(()=>{
//         if(isError) rej({error:"Error in P3"})
//         res({data: "Data from P3"})
//     }, 2000)
// })

// Promise.allSettled([p1,p2,p3])
// .then((data)=>{console.log(data)})
// .catch(err=> console.error(err))
// .finally(()=>console.log("Fetched"))




/**
 * 
 * Promise.race(iterable):
 * 
 * Resolves/rejects with the first settled Promise.
 * 
 * Return:
 *  [
        { status: "fulfilled", value: "ok" },
        { status: "rejected", reason: "fail" }
    ]
 * 
 */
// const p1  = new Promise((res,rej)=>{
//     let isError = false 
//     setTimeout(()=>{
//         if(isError) rej({error:"Error in P1"})
//         res({data: "Data from P1"})
//     }, 4000)
// })

// const p2  = new Promise((res,rej)=>{
//     let isError = false
//     setTimeout(()=>{
//         if(isError) rej({error:"Error in P2"})
//         res({data: "Data from P2"})
//     }, 1000)
// })

// const p3  = new Promise((res,rej)=>{
//     let isError = false
//     setTimeout(()=>{
//         if(isError) rej({error:"Error in P3"})
//         res({data: "Data from P3"})
//     }, 900)
// })

// Promise.race([p1,p3,p2])
// .then((data)=>{console.log(data)})
// .catch(err=> console.error(err))
// .finally(()=>console.log("Fetched"))

// use case:Use Case: Add a request timeout
// Useful when you want to fail if API takes too long.

function fetchWithTimeout(url, timeout = 5000) {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject("Timeout!"), timeout)
  );

  return Promise.race([
    fetch(url).then(res => res.json()),
    timeoutPromise
  ]);
}

fetchWithTimeout("/api/slow-data")
  .then(data => useData(data))
  .catch(err => showToast(err)); // "Timeout!" if slow



/**
 * 
 * Promise.any(iterable):
 * 
 * Resolves when the first fulfilled Promise happens
 * Rejects only if all fail — returns AggregateError
 * 
 */
const p1  = new Promise((res,rej)=>{
    let isError = true
    setTimeout(()=>{
        if(isError) rej({error:"Error in P1"})
        res({data: "Data from P1"})
    }, 4000)
})

const p2  = new Promise((res,rej)=>{
    let isError = true
    setTimeout(()=>{
        if(isError) rej({error:"Error in P2"})
        res({data: "Data from P2"})
    }, 1000)
})

const p3  = new Promise((res,rej)=>{
    let isError = true
    setTimeout(()=>{
        if(isError) rej({error:"Error in P3"})
        res({data: "Data from P3"})
    }, 2000)
})

Promise.any([p1,p2,p3])
.then((data)=>{console.log(data)})
.catch(err=> console.error(err.errors))
.finally(()=>console.log("Fetched"))

//Use Case: Try mirror servers or CDN fallback
// Use the first fulfilled request. Ignores rejections unless all fail.
const mirrors = [
  fetch("https://cdn1.example.com/script.js"),
  fetch("https://cdn2.example.com/script.js"),
  fetch("https://cdn3.example.com/script.js")
];

Promise.any(mirrors)
  .then(res => res.text())
  .then(script => eval(script))
  .catch(() => console.error("All CDNs failed"));



