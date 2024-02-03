// Difference between let and var in javascript
/**
 * 1. Scope: Variables declared with let have block scope, meaning they are only accessible within the block of code where they are defined.
 * Variables declared with var have function scope, making them accessible throughout the entire function in which they are defined, or globally if defined outside of any function.
 *
 * 2. Hoisting: Variable declared with var are hoisted to the top of their scope, which means you can access them before they are declared in the code. However, they will have an initial value of undefined until the actual assignment is encountered during runtime.
 * Variable declared with let are also hoisted but are not accessible before the line where they are declared.
 *
 *
 * 3. Re-declaration: Variables declared with let cannot be re-declared within the same scope, whereas Variables declared with var can be re-declared multiple times within the same scope.
 *
 * 4. Block scoping: Since let has block scope, it allows the creation of variables that are limited to the block (e.g., if statements or for loops) where they are defined. This helps in avoiding variable conflicts and enhances code clarity.
 * Var does not have this block scoping behavior.
 *
 * 5. Global scope: Variables declared with var outside any function have global scope, which means they can be accessed anywhere in the code.
 * Variables declared with let outside any function are also global but not added as properties of the global object (e.g., 'window' in browsers).
 *
 * To summarize, let provides block scoping, prevents re-declaration in the same scope, and has a more predictable behavior compared to var.
 * It is generally recommended to use let (or const for constants) over var unless there is a specific reason to use var.
 */

// Example 1:  Block Scope
function exampleBlockScope() {
  if (true) {
    let x = 10;
    var y = 20;
    console.log(x); // Output: 10
    console.log(y); // Output: 20
  }
  //console.log(x); // Throws ReferenceError: x is not defined
  console.log(y); // Output: 20
}
//console.log(y); // Throws ReferenceError: y is not defined

exampleBlockScope();

// Example 2: Hoisting
console.log(a); // Output: undefined
var a = 10;
console.log(a); // Output: 10

//console.log(b); // Throws ReferenceError: b is not defined
let b = 20;
console.log(b); // 20

// Example 3: Re-declaration
var x = 10;
var x = 20;
console.log(`Re-declared value of x is: ${x}`); // Output: 20

let y = 10;
//let y = 20; // Throws SyntaxError: Identifier 'y' has already been declared

// Example 4: Global Scope
var globalVar = "I'm a global variable";
let globalLet = "I'm a global variable";

function exampleScope() {
    console.log(globalVar); // Output: I'm a global variable
    console.log(globalLet); // Output: I'm a global variable
}
exampleScope();

console.log(window.globalVar); // Output: I'm a global variable
console.log(window.globalLet); // Output: undefined