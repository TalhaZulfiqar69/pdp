// // function add(a, b) {
// //     return a + b;
// //   }
  
// //   console.log(add(3, 5));
// //   console.log(add(3, 5));



// //   function square(n) {
// //     return n * n;
// //   }
  
// //   console.log(square(4));
// //   console.log(square(4));


// //   function getEvenNumbers(numbers) {
// //     return numbers.filter(num => num % 2 === 0);
// //   }
  
// //   console.log(getEvenNumbers([1, 2, 3, 4, 5]));
// //   console.log(getEvenNumbers([1, 2, 3, 4, 5]));


// //   function doubleNumbers(numbers) {
// //     return numbers.map(n => n * 2);
// //   }
  
// //   console.log(doubleNumbers([1, 2, 3]));
// //   console.log(doubleNumbers([1, 2, 3]));


// //   function sumArray(numbers) {
// //     return numbers.reduce((sum, num) => sum + num, 0);
// //   }
  
// //   console.log(sumArray([1, 2, 3, 4]));
// //   console.log(sumArray([1, 2, 3, 4]));


// //   function toUpperCase(str) {
// //     return str.toUpperCase();
// //   }
  
// //   console.log(toUpperCase("hello"));
// //   console.log(toUpperCase("hello"));

// const counterReducer = (state, action) => {
//   if(action.type === "INCREMENT") {
//     return state + 1;
//   }
//   return state;
// }

// console.log(counterReducer(0, {type: "INCREMENT"}));
// console.log(counterReducer(0, {type: "INCREMENT"}));



// Examples of pure functions
const sum = (a, b) => {
  return a + b;
}

console.log(sum(2,5)); // 7
console.log(sum(2,5)); // 7
console.log(sum(2,5)); // 7




// Examples of impure functions

let total = 0;

const increment = (value) => {
  total += value;
  return total;
}

console.log(increment(6));
console.log(increment(6));

// import locales from "./locales";
// import default_locale from "./locales";

const checkLocales = (locales, defauleLocale) => {
  return (req, res, next) => {
    const queryLocale = req.query.locale;
    req.i18n = locales && locales.includes(queryLocale) ? queryLocale : defauleLocale;
    next();
  }
}


// This is impure function
const stateUpdateImpureFunction = (state, action) => {
  if (action.type === "INCREMENT") {
    state++;
  }
  return state;
}
// This is pure function
const stateUpdatePureFunction = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  };
  return state;
}

// This is pure function
const stateUpdatePureFunctionObjectForm = (state, action) => {
  if (action.type === "INCREMENT") {
    return { ...state, count: state.count + 1 };
  };
  return state;
}

