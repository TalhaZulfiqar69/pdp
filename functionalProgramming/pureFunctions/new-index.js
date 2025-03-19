// Pure functions
/**
 * 1. Functions depend on it's paramers
 * 2. Use of immutable data structure
 * 3. No side effects creates (e.g, console.log, api call, dom manipulation)
 * 4. Don't modify global and external variables
 * 5. Output is predictable
 */


// Example 1
function add(a, b) {
    return a + b;
}

add(3, 4); // Output is 7
add(3, 4); // Output is 7


// Example 2
function addToArray(arr, value) {
    return [...arr, value];
}

const myArr = [2, 4, 6, 8];
console.log(addToArray(myArr, 10));
console.log(myArr);


// Example 3
function updateUserName(user, newName) {
    return { ...user, name: newName };
}

const user = {
    id: 1,
    name: "Talha"
}
console.log(updateUserName(user, "Zulfiqar"));
console.log(user);


// Example 4
const stateUpdatePureFunction = (state, actionType) => {
    if (actionType === "INCREMENT") {
      return state + 1;
    };
    return state;
}

const state = 10;
console.log(stateUpdatePureFunction(state, "INCREMENT"));
console.log(state);


// Example 5
function formateDate(timestamp){
    return new Date(timestamp).toISOString().split('T')[0];
}
console.log(formateDate(1700000000000));
console.log(formateDate(1700000000000));

// Example 6
function toUpperCaseString(str) {
    
    return str.toUpperCase();
}

const str = "hello world";
console.log(toUpperCaseString(str));
console.log(str)

// Example 7
function getEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);

}

const numbers =[1,2,3,4,5,6,7,8,24,40,32,22];
console.log(getEvenNumbers(numbers));
console.log(numbers);