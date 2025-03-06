Examples:
// Number
let num1 = 10;  
let num2 = num1;  // New copy created
num2 = 20;
console.log(num1); // 10
console.log(num2); // 20
// String
let str1 = "Hello";
let str2 = str1;
str2 = "World";
console.log(str1); // "Hello"
console.log(str2); // "World"

// Boolean
let bool1 = true;
let bool2 = bool1;
bool2 = false;
console.log(bool1); // true
console.log(bool2); // false

// Null & Undefined
let val1 = null;
let val2 = val1;
val2 = "changed";
console.log(val1); // null
console.log(val2); // "changed"