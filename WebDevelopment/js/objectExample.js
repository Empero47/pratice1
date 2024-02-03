// What is Object
/**
 * An object is a collection of key-value pairs, where each key is a string (or symbol) and each value can be of any data type, including other objects of functions.
 * 
 * Objects in javascript are used to represent entities or concepts and provide a way to organize and access related data and functionality.
 * 
 * `Object.keys(obj)` Returns an array of strings that represent all the enumerable properties of an object.
 * 
 * `Object.values(obj)` Returns an array of values that correspond to the enumerable properties of an object
 * 
 * `Object.entries(obj)` Returns an array of key-value paris (as arrays) that represent all the enumerable properties of an object
 */

// Creating an object using object literal syntax
const person = {
    name: "Emmanuel",
    age: 30,
    profession: "Developer",
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

console.log(person.name);
console.log(person["age"]);
person.greet();

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));