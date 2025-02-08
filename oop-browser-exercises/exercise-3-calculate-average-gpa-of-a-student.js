/* Create code which calculates the average GPA of a student who has completed the following courses with grades:
•	Introduction to Programming – 5
•	Computer Devices – 3
•	Engineering English – 4
•	Object Oriented Programming – 2
•	Mathematics Primer – 4 */

// Solution # 1

// Define an array of grades
const grades = [5, 3, 4, 2, 4];

// Calculate the total grades
let totalGrades = 0;
for (let i = 0; i < grades.length; i++) {
  totalGrades += grades[i];
}

// Calculate the average GPA
const averageGPA = totalGrades / grades.length;

// Log the average GPA
console.log("The average GPA of the student is: " + averageGPA.toFixed(2));

// Solution # 2

// Define the grades for each course
const introProgramming = 5;
const computerDevices = 3;
const engineeringEnglish = 4;
const objectOrientedProgramming = 2;
const mathematicsPrimer = 4;

// Calculate the sum of the grades and the average GPA
const sum = introProgramming + computerDevices + engineeringEnglish + objectOrientedProgramming + mathematicsPrimer;
const count = 5;
const average = sum / count;

console.log("Student GPA: " + average);
