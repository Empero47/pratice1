/**
 * JavaScript is a dynamically typed language, which means that variables can hold values of different data types at different times during program execution.
 * 
 * JavaScript has 8 Datatypes
 * 1. String.
 * 2. Number.
 * 3. BigInt.
 * 4. Boolean.
 * 5. Undefined.
 * 6. Null.
 * 7. Symbol.
 * 8. Object
 * 
 * The Object Datatype can contain
 * 1. An Object.
 * 2. An Array.
 * 3. A date.
 */

// Number: Represents numeric values, including integers and floating-point numbers.
let age = 25; // integer
let price = 9.99; // floating-point number

// String: Represents textual data enclosed in single ('') or double qoutes("").
let name = "Emmanuel Kemakolam";
let message = 'Hello world';

// Boolean: Represents a logical value that can be either `true` or `false`.
let isRainning = true;
let isSunny = false;

// Null: Represents the intentional absence of any object value.
let myVariable = null;

// Undefined: Represents an unitialized variable or a variable without a value assigned.
let myVar; // undefined.

// Object; Rpresents a collection of key-value pairs or properties.
let person = {
    name: "Emmanuel Kemakolam",
    age: 25,
    isStudent: true
};

// Array: Represents an ordered list of values, enclosed in square brackets([]).
let numbers = [1,2,3,4,5];
let fruits = ['apple', 'banana', 'orange'];

// Function: Represents reusable blocks of code that can be invoked by name.
function add(a, b) {
    return a + b;
}
add(23, 5);