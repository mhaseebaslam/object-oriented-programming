// Solution # 1

// Create a function that calculates the average of an array of numbers
function calculateAverage(numbers) {
  if (numbers.length === 0) return 0;

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }

  return sum / numbers.length;
}

// Test the function
const testArray = [1, 2, 3, 4, 5];
console.log(calculateAverage(testArray)); // Output: 3

// Solution # 2

// Create a function that calculates the average of an array of numbers
function avgCalculator(values) {
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }

  let average = sum / values.length;
  return average;
}

// Test the function
const a = [1, 2, 3];
const b = [50, 20, 100, 5];

console.log("Avg of a is " + avgCalculator(a)); // Output: 2
console.log("Avg of b is " + avgCalculator(b)); // Output: 43.75
