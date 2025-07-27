///////////////////////////
// 🟢 FUNCTION METHODS & CONCEPTS
///////////////////////////
function greet(name) {
  return `Hello, ${name}`;
}

// length => number of parameters
greet.length; // returned value: 1

// name => function name
greet.name; // returned value: 'greet'

// call() => calls function with 'this' & args
greet.call(null, 'Jay'); // returned value: 'Hello, Jay'

// apply() => same as call, args as array
greet.apply(null, ['Jay']); // returned value: 'Hello, Jay'

// bind() => returns new function with bound this
const boundGreet = greet.bind(null, 'Jay');
boundGreet(); // returned value: 'Hello, Jay'

// toString() => returns function source code
greet.toString(); // returned value: function code

// Arrow functions have no 'this', cannot be constructors
const sum = (a, b) => a + b;
sum(1, 2); // returned value: 3

// Function constructor (not recommended)
const fn = new Function('a', 'b', 'return a + b');
fn(1, 2); // returned value: 3