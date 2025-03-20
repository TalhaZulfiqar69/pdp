// Immutibility
/**
 * 1. Code predictability
 * 2. Easy debugging
 * 3. Concurrency safe (helpful in multi threaded applications to avoid conflicts)
 */


// Example 1
let name = "Talha";
console.log(name.toUpperCase());

console.log(name);

// Example 2
const person = { id: 1, firstName: "Talha" };
let newObj = { ...person, lastName: "Zulfiqar" };
console.log(newObj);
console.log(person);


// Example 3
const arr = [2, 4, 5, 6];
let newArr = [...arr, 10];
console.log(newArr);
console.log(arr);

// Example 4
const exampleFourArr = [2, 3, 4, 5];
let exampleFourNewArr = exampleFourArr.map(num => num * 2);
console.log(exampleFourNewArr);
console.log(exampleFourArr);

// Example 5
let items = ["Apple", "Banana", "Mango"];

let newItems = items.filter(item => item !== "Banana");
console.log(items)
console.log(newItems)

// Example 6
function immutableFunc(state) {
    return { ...state, count: state + 1 }
}

const state = 10;
console.log(immutableFunc(state));
console.log(state);

// Example 7
const user = Object.freeze({ name: "Talha", age: 25 });

user.age = 26;
console.log(user.age);

// Example 8
const deepFreeze = (object) => {
    Object.keys(object).forEach(key => {
        if (typeof object[key] === "object" && object[key] !== null) {
            deepFreeze(object[key])
        }
    });
    return Object.freeze(object);

}

const obj = {
    prop: 42,
    data: {
        name: "ali butt",
        nested1: {
            school1: "private 1",
            nested2: {
                school2: "private 2",
                nested3: {
                    school3: "private 3",
                    nested4: {
                        school4: "private 4"
                    }
                }
            }
        }
    },
    user: {
        age: 20
    }
};
deepFreeze(obj);



// // You can still modify nested properties, as `data` and `nested` are not frozen
obj.data.name = "muna bhai";  // ✅ Allowed
obj.user.age = 30;  // ✅ Allowed
obj.data.nested1.school1 = "public 1";  // ✅ Allowed
obj.data.nested1.nested2.school2 = "public 2";  // ✅ Allowed
obj.data.nested1.nested2.nested3.school3 = "public 3";  // ✅ Allowed
obj.data.nested1.nested2.nested3.nested4.school4 = "public 4";  // ✅ Allowed

console.log(obj);  // Data changes will reflect

console.log("obj.data.name :", obj.data.name);
console.log("obj.data.nested1.school1 :", obj.data.nested1.school1);
console.log("obj.data.nested1.nested2.school2 :", obj.data.nested1.nested2.school2);
console.log("obj.data.nested1.nested2.nested3.school3 :", obj.data.nested1.nested2.nested3.school3);
console.log("obj.data.nested1.nested2.nested3.nested4.school4 :", obj.data.nested1.nested2.nested3.nested4.school4);


const multiDimArray = [
    [1, 2, 3],
    [4, 5, { a: 10, b: 20 }],
    [[6, 7], 8, 9]
];

deepFreeze(multiDimArray);

multiDimArray[0][0] = 100;
multiDimArray[1][2].a = 500;
multiDimArray[2][0][1] = 99;

console.log("multiDimArray :", multiDimArray)


const ar = [2,3,4];

console.log(typeof arr);