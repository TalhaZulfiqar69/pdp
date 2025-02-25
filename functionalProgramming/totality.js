/** 
DEFINITION:
Its the concept in functional programming, in which a function takes parameters and returns vallid outputs
We have total and partial functions:

TOTAL FUNCTIONS:
1. Total functions always return valid output
2. Total functions are predictable
3. Total functions dont return any runtime errors
4. Total functions used for mathematical reasose
SAFE, PREDICTABLE and BUG-FREE

PARTIAL FUNCTIONS:

*/

const add = (a, b) => {
    return a + b;
}


// This is partial function
const safeDivideTotal = (a, b) => {
    return b === 0 ? 0 : a / b;
}

// This is partial function
const safeDividePartial = (a, b) => {
    if (b === 0) {
        new Error("Cannot be divided by zero");
    }
    return a / b
}

const arr = [2,4,6,8];

const getArray = (arr, index) => {
    return index >= 0 && arr.length < arr[index] ? arr[index] : null;
}

console.log(getArray(arr, 6))