// let person = { name: "Talha", age: 25 };

// let updatedPerson = { ...person, age: 26 };

// console.log(person);
// console.log(updatedPerson);



// function incrementAge(person) {
//     return { ...person, age: person.age + 1 };
// }

// let user = { name: "Ali", age: 30 };
// let updatedUser = incrementAge(user);

// console.log(user);
// console.log(updatedUser);

// const obj = { name: "Sara", age: 25 };
// Object.freeze(obj);

// obj.age = 26;
// console.log(obj);



// const { Map } = require('immutable');

// const user2 = Map({ name: "Talha", age: 25 });
// const updatedUser2 = user2.set("age", 26);

// console.log(user2.get("age"));
// console.log(updatedUser2.get("age"));


// const { List } = require('immutable');


// const numbers = List([1, 2, 3]);
// const updatedNumbers = numbers.push(4);

// console.log(numbers.toArray());
// console.log(updatedNumbers.toArray());


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

// console.log("obj :", obj);

// Object.freeze(obj);


// // You can still modify nested properties, as `data` and `nested` are not frozen
// obj.data.name = "muna bhai";  // ✅ Allowed
// obj.data.nested.school = "public";  // ✅ Allowed

// console.log(obj);  // Data changes will reflect


const deepFreeze = (object) => {
    Object.keys(object).forEach(key => {
        if (typeof object[key] === "object" && object[key] !==null) {
            deepFreeze(object[key])
        }
    });
    console.log("object :", object);
    return Object.freeze(object);

}

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