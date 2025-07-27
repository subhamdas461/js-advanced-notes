/**
 * __proto__ is attached to object
 * prototypt is attached to Class eg String Number Object Array etc.
 */


const p1 = {
    name : "Subham",
    surname: "Das",
    fullName() {
        return `${this.name} ${this.surname}`
    }
}

const p2 = Object.create(p1) // correct way

const p3 = {
    __proto__: null // do not use this just for learning
}


let s = "this is  string" // similar to " new String("this is  string")

// ***********String****Object(Everything end here)******null****
console.log(s.__proto__.__proto__.__proto__);
