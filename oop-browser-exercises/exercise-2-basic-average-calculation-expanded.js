// Array of 10 numbers
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

// Calculate the sum of the numbers
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

// Calculate the average
const average = sum / numbers.length;

// Log the sum
console.log("The sum is: " + sum);

// Log the average
console.log("The average is: " + average);
