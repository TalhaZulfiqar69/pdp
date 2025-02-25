let person = { name: "Talha", age: 25 };

let updatedPerson = { ...person, age: 26 };

console.log(person);
console.log(updatedPerson);



function incrementAge(person) {
    return { ...person, age: person.age + 1 };
}

let user = { name: "Ali", age: 30 };
let updatedUser = incrementAge(user);

console.log(user);
console.log(updatedUser);

const obj = { name: "Sara", age: 25 };
Object.freeze(obj);

obj.age = 26;
console.log(obj);



const { Map } = require('immutable');

const user2 = Map({ name: "Talha", age: 25 });
const updatedUser2 = user2.set("age", 26);

console.log(user2.get("age"));
console.log(updatedUser2.get("age"));


const { List } = require('immutable');


const numbers = List([1, 2, 3]);
const updatedNumbers = numbers.push(4);

console.log(numbers.toArray());
console.log(updatedNumbers.toArray());