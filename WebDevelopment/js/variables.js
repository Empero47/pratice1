// JavaScript Variables
/**
 * Variable are containers for storing data.
 * 
 * Or
 * 
 * Variable can be defined as a reserved memory location where values of a definite data type can be stored.
 * 
 * JavaSCript Variables can be declared in 4 ways:
 * 1. Automatically
 * 2. Using var
 * 3. Using let
 * 4. Using const
 * 
 * When to Use var, let, or const?
 * 1. Always declare variables
 * 2. Alwasys use const if the value should not be changed
 * 3. Always use const if the type should not be changed (Arrays and Objects).
 * 4. Only use let if you can't use const
 * 5. Only use var if you must support old browsers.
 * 
 * JavaScript Identifiers
 * 
 * All JavaScript variables must be Identified with unique names.
 * These unique names are called Identifiers.
 * Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).
 * 
 * The general rules for constructing names for variables (unique Identifiers) are:
 * 1. Names can contain letters, digits, underscores, and dollar signs.
 * 2. Names must begin with a letter.
 * 3. Names can also begin with $ and _ .
 * 4. Names are case sensitive (y and Y are different variables).
 * 5. Revserved words (like JavaScript keywords) cannot be used as names.
 * 
 * JavaScript Data Types
 * JavaScript variables can hold numbers like 100 and text values like "Emmanuel Kemakolam".
 * 
 * In programming. text values are called Strings.
 * JavaScript can handle many types of data, but for now, Just think of numbers and Strings.
 * 
 * Strings are written inside double or single quotes. Numbers are written without quotes. 
 * If you put a number in quotes, It will be treated as String.
 * 
 * Example
 *  const pi = 3.14;
 * let person = "Emmanuel Kemakolam";
 * let answer = 'yes I am';
 * let age; Definition
 * age = 18; Initialisation
 * let name = "Emmanuel"; Declaration
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

// Automatically
// x = 5;
// y = 6;
// z = x + y;

// Using var
var x = 5;
var y = 6;
var z = x + y;
document.write(z + "<br>");

// Using let
let a = 12;
let b = 41;
let c = a + b;
document.write(c + "<br>");

// Using const
const i = 22;
const j = 21;
const k = i + j;
document.write(k + "<br>");