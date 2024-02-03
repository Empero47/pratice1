// JavaScript Loop
/**
 * What is loop?
 * In computer programming, a loop is a sequence of instructions that is continually repeated until a certain condition is reached.
 * Types of Loop:
 * 1. For Loop.
 * 2. While Loop.
 * 3. Do-while Loop.
 * 
 * The three building blocks of loop are:
 * 1. Declaration (loop variable)
 * 2. Condition (Determines the progress of the loop)
 * 3. Increment / Decrement (Update the value of the loop variable).
 * 
 */

// DRY(Don't Repeat Yourself)
console.log(1);
console.log(2);
console.log(3);
console.log(4); // and so on...

// For loop
console.log("For Loop");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// While loop
console.log("While Loop");
let count = 11;
while (count <= 20) {
    console.log(count);
    count++;
}

// Do-While Loop
console.log("Do-While Loop");
let num = 12;
do {
    console.log(num);
    num++;
} while (num <= 30);

// Class work
// Write a code to print even numbers from 1 - 50 using any loop of your choice.
console.log('Even numbers from 1 - 50');
for (let even = 1; even <= 50; even++) {
    if (even % 2 == 0) {
        console.log(even);
    }
}