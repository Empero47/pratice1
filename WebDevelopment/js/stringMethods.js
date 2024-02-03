// Javascript String methods with examples

// length: Returns the length of a string
const message = "Hello, World!";
console.log(message.length); // Output: 13

// toUpperCase: Converts a string to uppercase
const name1 = "Emmanuel Kemakolam";
console.log(name1.toUpperCase());

// toLowerCase: Converts a string to lowercase
const name2 = "John Doe";
console.log(name2.toLowerCase());

// charAt: Returns the character at a specified index in a string
const message1 = "Hello, World!";
console.log(message1.charAt(1));

// substring: Extracts a portion of a string based on a specified start and end indices.
const message2 = "Hello, World!";
console.log(message2.substring(0, 5)); // Output: Hello

// slice: Extracts a portion of a string based on specified start and end indices (supports negative indices)
const message3 = "Hello, World!";
console.log(message3.slice(7))// Output: world!
console.log(message3.slice(-6))// Output: world!

// indexOf: Returns the index of the first occurrence of a specified substring in a string.
const message4 = "Hello, World!";
console.log(message4.indexOf("World")); // Outputs: 7

// Replace: Replaces a specified substring with another substring in a string.
const message5 = "Hello, World!";
const newMessage = message5.replace("World", "JavaScript");
console.log(newMessage);

// trim: Removes leading and trailing whitespace from a string.
const text = "     Hello, world!    ";
console.log(text.length);
const newText = text.trim();
console.log(newText.length);