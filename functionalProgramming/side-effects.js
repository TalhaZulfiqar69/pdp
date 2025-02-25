// Pure Function (No Side Effect)
function add(a, b) {
    return a + b;  // Bas input se output calculate kiya, koi aur change nahi kiya
}

add(3,4);

// Function with Side Effect
let total = 0;
function addToTotal(value) {
    total += value;  // Yeh global state modify kar raha hai
}

addToTotal(5);

const axios = require("axios");
async function getTodo() {
    const todo = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    console.log("todotodo :", todo.data);
    return todo.data;
}

const result = getTodo(); // Isko test karna mushkil hoga kyunki yeh network par depend karta hai

console.log("result :", result);


let counter = 0;
function incrementCounter() {
    counter++;  // Global state modify ho rahi hai
}

incrementCounter();

// Pure Function
function multiply(a, b) {
    return a * b;
}

// Higher-Order Function
function withLogging(fn) {
    return function (...args) {
        console.log("Calling function with args:", args);
        return fn(...args);
    };
}

const loggedMultiply = withLogging(multiply);
console.log(loggedMultiply(2, 3)); // Console me log bhi hoga, aur function ka result bhi milega


const fs = require("fs");

// Encapsulating Side Effect
const readFile = (path) => () => fs.readFileSync(path, "utf8"); 

const readFileEffect = readFile("data.txt"); 
console.log(readFileEffect());  // File ki value sirf jab chahein tab milegi