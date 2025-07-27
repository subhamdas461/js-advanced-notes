
///////////////////////////
// 🟢 STRING METHODS
///////////////////////////
const str = "  Hello JavaScript World!  ";

// 1. length => Gets string length
str.length; // returned value: 27

// 2. charAt(index) => Character at index
str.charAt(2); // returned value: 'H'

// 3. charCodeAt(index) => Unicode of character
str.charCodeAt(1); // returned value: 32

// 4. at(index)
str.at(-1); // returned value: ' '

// 5. slice(start, end)
str.slice(2, 7); // returned value: 'Hello'

// 6. substring(start, end)
str.substring(2, 7); // returned value: 'Hello'

// 7. substr(start, length)
str.substr(2, 5); // returned value: 'Hello' (deprecated)

// 8. indexOf(substring)
str.indexOf("JavaScript"); // returned value: 8

// 9. lastIndexOf(substring)
str.lastIndexOf(" "); // returned value: 25

// 10. includes(substring)
str.includes("Java"); // returned value: true

// 11. startsWith(substring)
str.startsWith("  He"); // returned value: true

// 12. endsWith(substring)
str.trim().endsWith("World!"); // returned value: true

// 13. trim()
str.trim(); // returned value: 'Hello JavaScript World!'

// 14. trimStart(), trimEnd()
str.trimStart(); // returned value: 'Hello JavaScript World!  '
str.trimEnd();   // returned value: '  Hello JavaScript World!'

// 15. padStart(targetLength, padString)
"5".padStart(3, "0"); // returned value: '005'

// 16. padEnd(targetLength, padString)
"5".padEnd(3, "0"); // returned value: '500'

// 17. repeat(count)
"Hi".repeat(3); // returned value: 'HiHiHi'

// 18. replace(search, replacement)
str.replace("JavaScript", "JS"); // returned value: '  Hello JS World!  '

// 19. replaceAll(search, replacement)
"a-b-a".replaceAll("a", "x"); // returned value: 'x-b-x'

// 20. toUpperCase()
str.toUpperCase(); // returned value: '  HELLO JAVASCRIPT WORLD!  '

// 21. toLowerCase()
str.toLowerCase(); // returned value: '  hello javascript world!  '

// 22. split(separator, limit)
str.split(" "); // returned value: ["", "", "Hello", "JavaScript", "World!", "", ""]

// 23. match(regex)
"abc123".match(/\d+/); // returned value: ['123']

// 24. matchAll(regex)
[..."abc123abc456".matchAll(/\d+/g)]; // returned value: [['123'], ['456']]

// 25. search(regex)
"abc123".search(/\d/); // returned value: 3

// 26. localeCompare(str2)
"a".localeCompare("b"); // returned value: -1

// 27. normalize()
"café".normalize("NFC"); // returned value: 'café'

// 28. valueOf()
str.valueOf(); // returned value: same as str

// 29. toString()
str.toString(); // returned value: same as str
