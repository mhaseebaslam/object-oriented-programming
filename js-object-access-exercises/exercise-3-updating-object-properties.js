// Exercise 3: Updating Object Properties

// Create an object car with the properties
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2019,
};

// Update the year property to 2021
car.year = 2021;

// Add a new property color with the value "blue"
car.color = "blue";

// Delete the model property from the object
delete car.model;

// Print the updated object to verify changes
console.log(car); // { make: 'Toyota', year: 2021, color: 'blue' }
