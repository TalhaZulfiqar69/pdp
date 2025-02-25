// ✅ Callback kaam tab karte hain jab koi cheez waqt leti hai (API, database, file read, etc.).
// ✅ JavaScript ko block hone se bachane ke liye callbacks istemal hote hain.
// ✅ Jab kaam complete hota hai tab callback function ko bula liya jata hai.

function greet(name) {
    console.log(`Hello, ${name}`);
}
greet('Talha');
console.log("This runs after greet()"); 



function greet(name, callback) {
    setTimeout(() => {
        console.log(`Hello, ${name}`);
        callback(); 
    }, 2000);
}

function afterGreeting() {
    console.log("This runs after greet()");
}

greet('Talha', afterGreeting);

function fetchData(callback) {
    setTimeout(() => {
        console.log("Data received from server");
        callback("Sample Data");
    }, 3000);
}

function processData(data) {
    console.log("Processing:", data);
}

fetchData(processData);



// CALLBACK HELL

function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 completed");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 completed");
        callback();
    }, 1000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 completed");
        callback();
    }, 1000);
}

// Callback Hell
step1(() => {
    step2(() => {
        step3(() => {
            console.log("All steps completed");
        });
    });
});





function calculator(a, b, operation) {
    let result = operation(a, b); // Callback function yahan pass ho raha hai
    console.log("Result:", result);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

calculator(5, 3, add);      // Output: Result: 8
calculator(5, 3, multiply); // Output: Result: 15


const axios = require("axios");



// with Callback implementation
/**
const  todo = async (id) => {
    try {
        const todoById = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
        console.log("todoByIdtodoByIdtodoById :", todoById.data);
    } catch (error) {
        console.log("errorerrorerrorerrorerror :", error.message);
    }
}


const getTodoById = (callback) => {
    console.log("getTodoById function is called");
    callback(2);
    console.log("callback called and find todo by id");
}

getTodoById(todo);
**/

// example 1: syncronous
/**
 function greet(name) {
    console.log(`Hello, ${name}`);
}
greet('Talha');
console.log("This runs after greet()"); 
**/

// example 1: asyncronous
/**
function greet(name, callback) {
    setTimeout(() => {
        console.log(name);
        callback();
    }, 2000);
}

function afterGreet(callback) {
    console.log("This runs after greet()");
}

greet("Muhammad Talha Zulfiqar", afterGreet);
**/


// Callback hell example:
function step1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 1 function is called");
            resolve();
        }, 1000);
    })
}

function step2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 2 function is called");
            resolve();
        }, 1000);
    })
}

function step3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 3 function is called");
            resolve();
        }, 1000);
    })
}



step1().then(res => {
    step2().then(res => {
        step3().then(res => {
            console.log("All promises resolved");
        }).catch(err => {
            console.log(err);
        })
    }).catch(err => {
        console.log(err);
    })
}).catch(err => {
    console.log(err);
})


(async function callAllCallbacks() {
    try {
        await step1();
        await step2();
        await step3();
        console.log("All promises resolved");
    } catch (error) {
        console.log("error :", error);
    }
})()

async function callAllCallbacks() {
    try {
        await step1();
        await step2();
        await step3();
        console.log("All promises resolved");
    } catch (error) {
        console.log("error :", error);
    }
}

callAllCallbacks();



console.log("Task Starts");


setTimeout(() => {
    for (let i = 0; i < 100000; i++) {
        console.log(i)
    }
}, 2000);

console.log("Task Ends");


console.log("Fetching data...");

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log("Data received:", data));

console.log("Doing other work...");