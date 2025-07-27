// const arr = [1,,2,3,6,10]
// arr.push(99);

// polyfill for push

// if(!Array.prototype.push){
//     Array.prototype.push = () =>{}
// }
//  Array.prototype.customPush = function(num){
//     this[this.length] = num
//     return this.length
// }
// console.log(arr.customPush(99));
 

//polyfill for forEach
// arr.forEach((e, i, arr1)=>{
//     console.log(e,i, arr1);
// })

// Array.prototype.cusForEach = function(cb, args){
//    for (let i = 0; i < this.length; i++) {
//        cb.call(args,this[i], i, this);
//    }
// };
// arr.cusForEach((e, i, arr1)=>{
//     console.log(e,i, arr1);
// })


// polyfill for map()

// const a = arr.map(e=>{
//     return e+2
// })
// console.log(a)

// Array.prototype.cusMap = function(cb, args){
//     let res= new Array(this.length); 
//    for (let i = 0; i < this.length; i++) {
//      if( Object.prototype.hasOwnProperty.call(this, i)) res[i] = (cb.call(args,this[i], i, this))
//    }
//    return res
// };
// const ans = arr.cusMap((e, i, arr1)=>{
//     // console.log(e,i, arr1);
//     return e+2
// })

// console.log(arr,ans)



// Polyfill for Promise.all()

Promise.myAll = (promisArr) => {
    let output = []
    let compCounter = 0
    return new Promise((resolve, reject)=>{
        promisArr.forEach((e,i)=>{
            Promise.resolve(e).then((data)=>{
                output[i] = data
                compCounter++;
                if(compCounter === promisArr.length) resolve(output)
            })
            .catch(err=> reject(err))
            
        })
        if(promisArr.length ===0)resolve([])
    })
}

const p1 = new Promise((res,rej)=>{
    res(1)
});
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.myAll([p1, p2, p3])
  .then(res => console.log(res)) // [1, 2, 3]
  .catch(err => console.error(err));

  Promise.myAllPoly = (promiseArray) =>{
    let output = []
    let completed = 0
    let n = promiseArray.length
    return new Promise((res,rej)=>{
        promiseArray.forEach((e,idx)=>{
           e.then((data)=>{
             output[idx] = data
             completed++
             if(completed === n) res(output)
           }).catch((err)=> rej(err))
        })
    })
  }

//   polyfill for call, bind & apply




const data1 = {
    firstName : "Ram",
    age: 22,
    last:"Das"
}
const data2 = {
    firstName: "John",
    age: 26
}

function getData(lastname){
    console.log(this.firstName, this.age, lastname);
}

// getData.call(data1.last)
// getData.call(data2)

// for call
Function.prototype.myCall = function(context,...args){
    if (typeof this !== 'function') {
      throw new TypeError('myCall must be called on a function');
    }
    context = context || globalThis; // fallback to global object
    const fnKey = Symbol('fn'); // avoid name collisions
    context[fnKey] = this; // attach function to context
    const result = context[fnKey](...args); // call it
    delete context[fnKey]; // clean up
    return result;
    // context._fn = this;
    // context._fn(...args)
}

getData.myCall(data1,5)


//for apply
Function.prototype.myApply = function(context,args){
    if (typeof this !== 'function') {
      throw new TypeError('myApply must be called on a function');
    }
    context = context || globalThis; // fallback to global object
    const fnKey = Symbol('fn'); // avoid name collisions
    context[fnKey] = this; // attach function to context
    const result = context[fnKey](args); // call it
    delete context[fnKey]; // clean up
    return result;
}

// getData.myApply(data1)

Function.prototype.myBind = function(context, ...args){
    if (typeof this !== 'function') {
      throw new TypeError('Bind must be called on a function');
    }
    context._temp = this;
    return function(...argInner){
        return context._temp(...args,...argInner)
    }
}

getData.myBind(data2, 9)(8)


Promise.myAll = function(promises){
    let output=[]
    let count=0
    return new Promise((resolve, reject)=>{
        promises.forEach(prom,i=>{
            Promise.resolve(prom).then((data)=>{
                output[i] = data;
                count++;
                if(count===promises.length) resolve(output)
            })
            .catch(err=>reject(err))
        })
    })
}