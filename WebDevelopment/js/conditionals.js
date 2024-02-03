// Conditional Statements
/**
 * Conditional Satements in JavaSCript allow you to control the flow of your code based on certain conditions. They are used to make decisions and execute different blocks of code based on whether a condition is true of false.
 * There are primarily three types of conditional statements in Javascript:
 * 1. if statement.
 * 2. else if statement.
 * 3. else statement.
 * You can also use the ternary operator (`? :`) for simpler conditions.
 *
 * symbols: ``, '', ""
 */

// The If-else statements:
const age = 25;
if (age >= 18) {
  console.log("You are an adult, You are eligible to Vote.");
} else {
  console.log(`You are a minor, come back in the next ${18 - age} years.`);
}

// The if, else if and else ladder statement
const score = 85;

if (score >= 90) {
  console.log("You got an A!");
} else if (score >= 80) {
  console.log("You got a B!");
} else if (score >= 70) {
  console.log("You got a C!");
} else {
  console.log("You need to improve your grade");
}

// Ternary operator
const status = age >= 18 ? "Adult" : "Minor";
console.log(`you are ${status}.`);

// Switch Statements
// getDay() method returns the weekday as a number between 0 and 6
const dayOfWeek = new Date().getDay();
let dayName;
switch (dayOfWeek) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day"
    break;
}
console.log(`today is ${dayName}`);