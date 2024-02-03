// What is Array?
/**
 * An array is a data structure consiting of a collection of elements (values or variables), each identified by at least one array index or Key.
 *
 * Array can be defined as ordered group of duplicate elememt.
 */

// Example of an array
let student1 = "Chinedu";
let student2 = "Vicky";
let student3 = "Remmy";
console.log(student1);
console.log(student2);
console.log(student3);

console.log("Printing elements of the array");
const students = ["Chinedu", "Vicky", "Remmy"];
console.log(students[0]);
// length - returns the length of the array
console.log(students.length);
// push() - adds one or more elements to the end of the array and returns the length of the array
students.push("James", "Peter");
console.log(students);
// pop() - removes the last element from the array and returns that element
students.pop();
console.log(students);
// shift() - removes the first element from the array and returns that element
students.shift();
console.log(students);
// unshift() - adds one or more elements to the beginning of the array and returns the new length of the array.
students.unshift("Paul");
console.log(students);
// concat() - Combines two or more arrays and returns a new array
const fruits = ["apple", "banana"];
console.log(fruits);
const vegetables = ["carrot", "potato"];
console.log(vegetables);
const combined = fruits.concat(vegetables);
console.log(combined);
// slice() - Extracts a section of an array and returns a new array.
const numbers = [1,2,3,4,5];
console.log(numbers);
const slicedNumbers = numbers.slice(1,4);
console.log(slicedNumbers);
// indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
const index = numbers.indexOf(3);
console.log(index);
// forEach() - Executes a provided function once for each array element
students.forEach((student) => {
    console.log(student);
});
