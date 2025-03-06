Examples:
// Object
let obj1 = { name: "Ali" };  
let obj2 = obj1;  // Reference passed
obj2.name = "Ahmed";
console.log(obj1.name); // "Ahmed"
console.log(obj2.name); // "Ahmed"

// Array
let arr1 = [1, 2, 3];
let arr2 = arr1;  // Reference passed
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]

// Function
let func1 = function() { console.log("Hello"); };
let func2 = func1;
func2(); // "Hello"
