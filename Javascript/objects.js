///////////////////////////
// 🟢 OBJECT METHODS
///////////////////////////
const obj = { a: 1, b: 2, c: 3 };

// Object.keys(obj) => array of keys
Object.keys(obj); // returned value: ['a', 'b', 'c']

// Object.values(obj) => array of values
Object.values(obj); // returned value: [1, 2, 3]

// Object.entries(obj) => array of [key, value]
Object.entries(obj); // returned value: [['a', 1], ['b', 2], ['c', 3]]

// Object.assign(target, ...sources) => copies props
Object.assign({}, obj); // returned value: { a: 1, b: 2, c: 3 }

// Object.hasOwn(obj, key) => true if own property
Object.hasOwn(obj, 'a'); // returned value: true

// Object.freeze(obj) => makes object immutable
const frozen = Object.freeze({ x: 1 });
frozen.x = 2; // no change

// Object.seal(obj) => prevents adding/removing props
const sealed = Object.seal({ x: 1 });
sealed.y = 2; // not added

// Object.is(a, b) => strict comparison
Object.is(NaN, NaN); // returned value: true