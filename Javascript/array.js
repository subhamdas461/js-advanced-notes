// 📘 Complete JavaScript Array & String Methods Guide with Definitions, Returns, and Examples

///////////////////////////
// 🟢 ARRAY METHODS
///////////////////////////
const arr1 = [2, 6, 10, 11, 5];

// 1. push() => Adds elements to end
arr1.push(99); // returned value: 6 (new length), modified result: [2, 6, 10, 11, 5, 99]

// 2. pop() => Removes last element
arr1.pop(); // returned value: 99, modified result: [2, 6, 10, 11, 5]

// 3. shift() => Removes first element
arr1.shift(); // returned value: 2, modified result: [6, 10, 11, 5]

// 4. unshift() => Adds elements to beginning
arr1.unshift(1); // returned value: 5(length), modified result: [1, 6, 10, 11, 5]

// 5. concat() => Merges arrays
const merged = arr1.concat([7, 8]); // returned value: [1, 6, 10, 11, 5, 7, 8], original not modified

// 6. slice(start, end) => Returns shallow copy
const sliced = merged.slice(1, 4); // returned value: [6, 10, 11], original not modified

// 7. splice(start, deleteCount, ...items) => Modifies array
merged.splice(2, 1, 99); // returned value: [10], modified result: [1, 6, 99, 11, 5, 7, 8]

// 8. indexOf(item)
merged.indexOf(99); // returned value: 2

// 9. lastIndexOf(item)
[1, 2, 3, 2].lastIndexOf(2); // returned value: 3

// 10. includes(item)
arr1.includes(10); // returned value: true

// 11. forEach(callback)
arr1.forEach(el => console.log(el)); // no return value, logs: 1 6 10 11 5

// 12. map(callback)
const squared = arr1.map(x => x ** 2); // returned value: [1, 36, 100, 121, 25], original not modified

// 13. filter(callback)
const even = arr1.filter(x => x % 2 === 0); // returned value: [6, 10], original not modified

// 14. find(callback)
arr1.find(x => x > 10); // returned value: 11

// 15. findIndex(callback)
arr1.findIndex(x => x > 10); // returned value: 3

// 16. reduce(callback, init)
arr1.reduce((acc, curr) => acc + curr, 0); // returned value: 33

// 17. reduceRight(callback)
["a", "b", "c"].reduceRight((acc, val) => acc + val); // returned value: "cba"

// 18. every(callback)
arr1.every(x => x < 20); // returned value: true

// 19. some(callback)
arr1.some(x => x > 10); // returned value: true

// 20. sort(compareFn)
arr1.sort((a, b) => a - b); // returned value: [1, 5, 6, 10, 11], modifies original

// 21. reverse()
arr1.reverse(); // returned value: [11, 10, 6, 5, 1], modifies original

// 22. flat(depth)
[1, [2, [3]]].flat(2); // returned value: [1, 2, 3]

// 23. flatMap(callback)
[1, 2].flatMap(x => [x, x * 2]); // returned value: [1, 2, 2, 4]

// 24. fill(value, start, end)
[1, 2, 3].fill(0, 1); // returned value: [1, 0, 0], modifies original

// 25. copyWithin(target, start, end)
[1, 2, 3, 4].copyWithin(1, 2); // returned value: [1, 3, 4, 4], modifies original

// 26. toString()
[1, 2, 3].toString(); // returned value: "1,2,3"

// 27. join(separator)
[1, 2, 3].join("-"); // returned value: "1-2-3"

// 28. Array.isArray()
Array.isArray([1, 2]); // returned value: true

// 29. from() => Converts iterable to array
Array.from("abc"); // returned value: ["a", "b", "c"]

// 30. of() => Creates array from arguments
Array.of(1, 2, 3); // returned value: [1, 2, 3]

