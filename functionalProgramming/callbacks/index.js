// ✅ Callback kaam tab karte hain jab koi cheez waqt leti hai (API, database, file read, etc.).
// ✅ JavaScript ko block hone se bachane ke liye callbacks istemal hote hain.
// ✅ Jab kaam complete hota hai tab callback function ko bula liya jata hai.

// function greet(name) {
//     console.log(`Hello, ${name}`);
// }
// greet('Talha');
// console.log("This runs after greet()"); 



// function greet(name, callback) {
//     setTimeout(() => {
//         console.log(`Hello, ${name}`);
//         callback(); 
//     }, 2000);
// }

// function afterGreeting() {
//     console.log("This runs after greet()");
// }

// greet('Talha', afterGreeting);

// function fetchData(callback) {
//     setTimeout(() => {
//         console.log("Data received from server");
//         callback("Sample Data");
//     }, 3000);
// }

// function processData(data) {
//     console.log("Processing:", data);
// }

// fetchData(processData);



// // CALLBACK HELL

// function step1(callback) {
//     setTimeout(() => {
//         console.log("Step 1 completed");
//         callback();
//     }, 1000);
// }

// function step2(callback) {
//     setTimeout(() => {
//         console.log("Step 2 completed");
//         callback();
//     }, 1000);
// }

// function step3(callback) {
//     setTimeout(() => {
//         console.log("Step 3 completed");
//         callback();
//     }, 1000);
// }

// // Callback Hell
// step1(() => {
//     step2(() => {
//         step3(() => {
//             console.log("All steps completed");
//         });
//     });
// });





// function calculator(a, b, operation) {
//     let result = operation(a, b); // Callback function yahan pass ho raha hai
//     console.log("Result:", result);
// }

// function add(x, y) {
//     return x + y;
// }

// function multiply(x, y) {
//     return x * y;
// }

// calculator(5, 3, add);      // Output: Result: 8
// calculator(5, 3, multiply); // Output: Result: 15


// const axios = require("axios");



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
function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 function is called");
        callback(null, "yes step1 called");
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 function is called");
        callback(null, "yes step2 called");
    }, 1000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 function is called");
        callback(null, "yes step3 called");
    }, 1000);
}


step1((err, res) => {
    if(err) {
        console.log("Error from step1", err);
        return;
    }
    console.log("res from step1", res);
    step2((err, res) => {
        if(err) {
            console.log("Error from step2", err);
            return;
        }
        console.log("res from step2", res);
        step3((err, res) => {
            if(err) {
                console.log("Error from step3", err);
                return;
            }
            console.log("res from step3", res);
        })
    })
});

// step1().then(res => {
//     step2().then(res => {
//         step3().then(res => {
//             console.log("All promises resolved");
//         }).catch(err => {
//             console.log(err);
//         })
//     }).catch(err => {
//         console.log(err);
//     })
// }).catch(err => {
//     console.log(err);
// })


// (async function callAllCallbacks() {
//     try {
//         await step1();
//         await step2();
//         await step3();
//         console.log("All promises resolved");
//     } catch (error) {
//         console.log("error :", error);
//     }
// })()

// async function callAllCallbacks() {
//     try {
//         await step1();
//         await step2();
//         await step3();
//         console.log("All promises resolved");
//     } catch (error) {
//         console.log("error :", error);
//     }
// }

// callAllCallbacks();



// console.log("Task Starts");


// setTimeout(() => {
//     for (let i = 0; i < 100000; i++) {
//         console.log(i)
//     }
// }, 2000);

// console.log("Task Ends");


// console.log("Fetching data...");

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(response => response.json())
//     .then(data => console.log("Data received:", data));

// console.log("Doing other work...");


// const fetchUser = (userId, callback) => {
//     setTimeout(() => {
//         console.log("User fetched");
//         callback({id: userId, name: "Muhammad Talha Zulfiqar"});
//     }, 2000);
// }

// const fetchOrders = (userId, callback) => {
//     setTimeout(() => {
//         console.log(`Orders fetched for user ${userId}`);
//         callback([{id: 1, product: "Mobile"}, {id: 2, product: "Power bank"}]);
//     }, 2000);
// }

// const fetchOrderDetail = (oderId, callback) => {
//     setTimeout(() => {
//         console.log(`Order fetched for ID: ${oderId}`);
//         callback({id: oderId, name: "Mobile"});
//     }, 2000);
// }

// const sendEmailConfirmation = (orderDetail, callback) => {
//     setTimeout(() => {
//         console.log("Email sent for order:", orderDetail.id);
//         callback("Email Sent Successfully!");
//     }, 2000);
// }


// fetchUser(1, (user, err) => {
//     console.log("============================================================================");
//     if (err) {
//         throw new Error("Error in fetchUser");
//     }
//     console.log("user :", user);
//     fetchOrders(user.id, (orders, err) => {
//         if (err) {
//             throw new Error("Error in fetchOrders");
//         }
//         console.log("orders :", orders);
//         fetchOrderDetail(orders[0].id, (orderDetail, err) => {
//             if (err) {
//                 throw new Error("Error in fetchOrders");
//             }
//             console.log("orderDetail :", orderDetail);
//             sendEmailConfirmation(orderDetail, (successMessage, err) => {
//                 if (err) {
//                     throw new Error("Error in fetchOrders");
//                 }
//                 console.log(successMessage);
//             });
//         });
//     });
// });


// // Solution with the help of promises

// const fetchUserWithPromise = (userId) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("User fetched");
//             resolve({id: userId, name: "Muhammad Talha Zulfiqar"});
//             return;
//         }, 2000);
//     })
// }

// const fetchOrdersWithPromise = (userId) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`Orders fetched for user ${userId}`);
//             resolve([{id: 1, product: "Mobile"}, {id: 2, product: "Power bank"}]);
//             return;
//         }, 2000);
//     })

// }
// const fetchOrderDetailWithPromise = (oderId) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`Order fetched for ID: ${oderId}`);
//             resolve({id: oderId, name: "Mobile"});
//             return;
//         }, 2000);
//     })

// }

// const sendEmailConfirmationWithPromise = (orderDetail) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Email sent for order:", orderDetail.id);
//             resolve("Email Sent Successfully!");
//             return;
//         }, 2000);
//     })
// }


// fetchUserWithPromise(1).then(user => {
//     console.log("============================================================================");
//     console.log(user);
//     return fetchOrdersWithPromise(user.id)
// }).then(orders => {
//     console.log("orders :", orders);
//     return fetchOrderDetailWithPromise(orders[0].id)
// }).then(orderDetail => {
//     console.log("orderDetail :", orderDetail);
//     return sendEmailConfirmationWithPromise(orderDetail)
// }).then(successMessage => {
//     console.log("successMessage :", successMessage);
// }).catch(error => console.log(error));

// const processOrder = async () => {
//     try {
//         console.log("============================================================================");
//         const user = await fetchUserWithPromise(1);
//         const orders = await fetchOrdersWithPromise(user.id);
//         const orderDetail = await fetchOrderDetailWithPromise(orders[0].id);
//         const sendNotification = await sendEmailConfirmationWithPromise(orderDetail);
//         console.log(sendNotification);
//     } catch (error) {
//         console.log(error)
//     }
// }
// processOrder();