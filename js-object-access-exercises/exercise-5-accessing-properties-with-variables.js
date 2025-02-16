// Exercise 5: Accessing Properties with Variables

// Create an object book with the properties
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};

// Create a variable property and assign it the string "author"
let property = "author";

// Access and print the value of the author property using the variable property
console.log(book[property]); // F. Scott Fitzgerald

// Change the value of the property variable to "title"
property = "title";

// Access and print the value of the title property
console.log(book[property]); // The Great Gatsby
