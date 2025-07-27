"use strict"

function greet(){
    console.log(this)
    function abc(){
        console.log(this)
    }
    abc()
}





let person = {
    name:"Subham",
    greet : function(){
        console.log("Outer",this)
        function abc(){
           console.log("Inner",this)
        }
        abc.call({a:10})
    }
   
}

// let greet = () =>{
//     console.log(this)
//     function abc(){
//         console.log(this)
//     }
//     abc()
// }

person.greet()

const employees = {
    fName : "Subham",
    LName: "Das"
}
const employer = {
    fName : "Vijay",
    LName: "Patel"
}
function hello(time){
    if(time ==="m")
    console.log(`Good morning ${this.fName} ${this.LName}!!`)
    if(time ==="a")
        console.log(`Good afternoon ${this.fName} ${this.LName}!!`)
    if(time ==="n")
        console.log(`Good night ${this.fName} ${this.LName}!!`)
}

/**
 * attach context(or this can be string number object) with the function
 * call: functionName.call(context, arg1,...,argn)
 * apply: functionName.apply(context, [arg1,...,argn])
 * bind: const greetNew = functionName.bind(context, arg1,...,argn)
 *       this greetNew can be called
 * 
 */
hello.apply(employees,["n"])
hello.apply(employer,["m"])


function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2); // preset first arg as 2
console.log(double(5)); // 10
